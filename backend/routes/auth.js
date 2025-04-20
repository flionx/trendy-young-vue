import express from 'express'
import User from '../models/User.js'

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const {login, password, role} = req.body;
        const user = new User({login, password, role: role || 'user'});
        await user.save();
        res.status(201).json({message: 'User created'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

export default router