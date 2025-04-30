import express from 'express'
import Product from '../models/Product.js';
import checkAuthToken from '../middleware/checkAuthToken.js';
import checkIsAdmin from '../middleware/checkUserRole.js';

const router = express.Router();

router.post('/create', checkAuthToken, checkIsAdmin, async (req, res) => {
    try {   
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json({product: savedProduct, message: 'Product created'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
router.get('/find', async (req, res) => {
    const { type, target } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (target) filter.target = target;

    try {
        const products = await Product.find(filter);
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to fetch products', details: error.message });
    }
});

router.get('/find/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to fetch product', details: error.message });
    }
});

router.put('/:id', checkAuthToken, checkIsAdmin, async (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;
    try {
        const product = await Product.findByIdAndUpdate(id, newProduct, { new: true });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to update product', details: error.message });
    }
});

router.delete('/:id', checkAuthToken, checkIsAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to delete product', details: error.message });
    }
});

export default router