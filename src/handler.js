const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const getAllProductsHandler = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        return res.response(products).code(200);
    } catch (error) {
        console.error(error);
        return res.response({ error: "Failed to fetch products" }).code(400);
    }
};

const addProductHandler = async (req, res) => {
    try {
        const newProductData = req.body;
        const product = await prisma.product.create({
            data: {
                name: newProductData.name,
                description: newProductData.description,
                image: newProductData.image,
                price: newProductData.price
            }
        });
        return res.response({ data: product, message: "Product created successfully" }).code(201);
    } catch (error) {
        console.error(error);
        return res.response({ error: "Failed to create product" }).code(400);
    }
};

const deleteProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.product.delete({
            where: { id: parseInt(id) }
        });
        return res.response({ message: "Product deleted successfully" }).code(200);
    } catch (error) {
        console.error(error);
        return res.response({ error: "Failed to delete product" }).code(500);
    }
};

const getProductByIdHandler  = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        });
        if (!product) {
            return res.response({ error: "Product not found" }).code(404);
        } else {
            return res.response(product).code(200);
        }
    } catch (error) {
        return res.response({ error: "Failed to fetch product" }).code(500);
    }
};

const editProductByIdHandler = async (req, res) => {
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
        return res.response({ data: product, message: "Product updated successfully" }).code(200);
    } catch (error) {
        return res.response({ error: "Failed to update product" }).code(500);
    }
}

module.exports = {
    getAllProductsHandler,
    addProductHandler,
    deleteProductByIdHandler,
    getProductByIdHandler,
    editProductByIdHandler
};
