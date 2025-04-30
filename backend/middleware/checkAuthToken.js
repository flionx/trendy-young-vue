import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../routes/auth.js';

const checkAuthToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Bearer token
    const token = authHeader && authHeader.split(' ')[1]; // token

    if (!token) return res.status(401).json({ message: 'The token is missing' })

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'The token is invalid' })
        req.user = user;
        next();
    })
}

export default checkAuthToken