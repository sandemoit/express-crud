// Layer untuk handle request dan response
// Biasanya juga handle validasi body

const express = require('express');
const router = express.Router();
const productService = require('./product.service');

router.get('/', async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: "Failed to fetch products" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        } else {
            return res.status(200).json(product);
        }
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch product" });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProductData = req.body;
        if (!newProductData) {
            return res.status(400).json({ error: "Invalid product data" });
        }
        
        const product = await productService.addProduct(newProductData);
        return res.status(201).json({ data: product, message: "Product created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: "Failed to create product" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await productService.deleteProductById(id);
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete product" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image, price } = req.body;
        if(!(name && description && image && price)) {
            return res.status(400).json({ error: "Fields are missing" });
        }

        const product = await productService.editProductById(id, { name, description, image, price });
        return res.status(200).json({ data: product, message: "Product updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update product" });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image, price } = req.body;
        const product = await productService.patchProductById(id, { name, description, image, price });
        return res.status(200).json({ data: product, message: "Product updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update product" });
    }
});

module.exports = router;