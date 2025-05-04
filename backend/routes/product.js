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
router.get('/random', async (req, res) => {
    try {
        const randomProducts = await Product.aggregate([ 
            { $sample: { size: 4 } } 
        ]);
        return res.status(200).json({ products: randomProducts });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to fetch random products', details: error.message });
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
router.get('/:id/similar', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        let similarProducts = await Product.aggregate([
            {$match: {
                type: product.type,
                target: product.target,
                _id: { $ne: product._id },
            }},
            {$sample: { size: 4 }}
        ]);

        if (similarProducts.length < 4) {
            const existingIds = similarProducts.map(prod => prod._id);
            existingIds.push(product._id);

            const needProducts = await Product.aggregate([
                {$match: {
                    target: product.target,
                    _id: { $nin: existingIds },
                }},
                {$sample: {size: 4 - similarProducts.length}}
            ]);
            similarProducts = [...similarProducts, ...needProducts];
        }

        return res.status(200).json({ products: similarProducts });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to fetch similar products', details: error.message });
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