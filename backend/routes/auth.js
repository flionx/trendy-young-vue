import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { randomBytes } from 'crypto'
import User from '../models/User.js'
import RefreshToken from '../models/RefreshToken.js'

const router = express.Router();
export const JWT_SECRET = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
    try {
        const {login, password, role} = req.body;
        const hasUser = await User.findOne({ login });
        if (hasUser) return res.status(400).json({ error: 'User with this login already exists' })

        const user = new User({login, password, role: role || 'user'});
        await user.save();
        res.status(201).json({message: 'User created'})
    } catch (error) {
        res.status(400).json({error: error.message})
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
        const refreshTokenExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
        await RefreshToken.create({
            token: refreshToken,
            userId: user._id,
            expiresAt: refreshTokenExpires,
        })

        res.status(200).json({ accessToken, refreshToken, user: {login: user.login, role: user.role} });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post('/refresh', async (req, res) => {
    const { refreshToken } = req.body;
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

    res.json({ accessToken: newAccessToken });
});

export default router