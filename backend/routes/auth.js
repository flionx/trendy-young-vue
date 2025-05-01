import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { randomBytes } from 'crypto'
import User from '../models/User.js'
import RefreshToken from '../models/RefreshToken.js'
import checkAuthToken from '../middleware/checkAuthToken.js'
import checkIsAdmin from '../middleware/checkUserRole.js'

const router = express.Router();
export const JWT_SECRET = process.env.JWT_SECRET || 'trendy-young-key';
const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: true,
}

router.post('/signup', async (req, res) => {
    try {
        const {login, password, role} = req.body;
        const hasUser = await User.findOne({ login });
        if (hasUser) return res.status(400).json({ error: 'User with this login already exists' })

        const user = new User({login, password, role: role || 'user'});
        await user.save();
        res.status(201).json({message: 'User created', login, role: user.role})
    } catch (error) {
        res.status(500).json({error: 'Error when trying to create a new user'})
    }
})

router.post('/login', async (req, res) => {
    try {        
        const {login, password} = req.body;

        const user = await User.findOne({ login });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid login or password' });
        }

        const accessToken = jwt.sign(
            { userId: user._id, login: user.login, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        )

        const refreshToken = randomBytes(32).toString('hex');
        const refreshTokenExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 ); //   7 days

        const tokenCount = await RefreshToken.countDocuments({ userId: user._id });
        if (tokenCount >= 3) {
            const oldestToken = await RefreshToken.findOne({ userId: user._id }).sort({ createdAt: 1 });
            if (oldestToken) {
                await RefreshToken.deleteOne({ _id: oldestToken._id });
            }
        }

        await RefreshToken.create({
            token: refreshToken,
            userId: user._id,
            expiresAt: refreshTokenExpires,
        })
        res.cookie('accessToken', accessToken, {
            ...cookieOptions,
            maxAge: 60 * 60 * 1000,
        })
        res.cookie('refreshToken', refreshToken, {
            ...cookieOptions,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        res.status(200).json({ login: user.login, role: user.role });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/refresh', async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ message: 'Refresh token is not available' });

    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedToken || storedToken.expiresAt < new Date()) {
        return res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
    
    const user = await User.findById(storedToken.userId);
    const newAccessToken = jwt.sign(
        { userId: user._id, login: user.login, role: user.role },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
    
    res.cookie('accessToken', newAccessToken, {
        ...cookieOptions,
        maxAge: 60 * 60 * 1000,
    })
    return res.status(201).json({ message: 'AccessToken created' });
});

router.get('/verify', checkAuthToken, checkIsAdmin, (req, res) => {
    res.json({ message: 'User is Admin' });
})

router.get('/logout', checkAuthToken, async (req, res) => {
    try {
        await RefreshToken.deleteOne({ token: req.cookies.refreshToken })
    
        res.clearCookie('accessToken', cookieOptions);
        res.clearCookie('refreshToken', cookieOptions);
        res.json({ message: 'User logged out' });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

export default router