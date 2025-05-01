import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../routes/auth.js';

const checkAuthToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json({ message: 'The token is missing' })

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: 'The token is invalid' })
        req.user = user;
        next();
    })
}

export default checkAuthToken