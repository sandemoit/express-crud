const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllProductsHandler = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: "Failed to fetch products" });
    }
};

const addProductHandler = async (req, res) => {
    try {
        const newProductData = req.body;
        if (!newProductData) {
            return res.status(400).json({ error: "Invalid product data" });
        }
        
        const product = await prisma.product.create({
            data: {
                name: newProductData.name,
                description: newProductData.description,
                image: newProductData.image,
                price: newProductData.price
            }
        });
        return res.status(201).json({ data: product, message: "Product created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: "Failed to create product" });
    }
};

const deleteProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.product.delete({
            where: { id: parseInt(id) }
        });
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete product" });
    }
};

const getProductByIdHandler  = async (req, res) => {
    try {
        const { id } = req.params; // string
        const product = await prisma.product.findUnique({
            where: { id: Number(id) }
        });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        } else {
            return res.status(200).json(product);
        }
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch product" });
    }
};

const editProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image, price } = req.body;

        if(!(image && description && name && price)) {
            return res.status(400).send("Some field are missing");
        }

        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                name,
                description,
                image,
                price
            }
        });
        return res.status(200).json({ data: product, message: "Product updated successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update product" });
    }
}

const patchProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image, price } = req.body;

        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                name,
                description,
                image,
                price
            }
        });
        return res.status(200).json({ data: product, message: "Product updated successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update product" });
    }
}

module.exports = {
    getAllProductsHandler,
    addProductHandler,
    deleteProductByIdHandler,
    getProductByIdHandler,
    editProductByIdHandler,
    patchProductByIdHandler
};
