import express from 'express'
import Product from '../models/Product.js';

const router = express.Router();

router.post('/create', async (req, res) => {
    try {   
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json({product: savedProduct, message: 'Product created'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

export default router