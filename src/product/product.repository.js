// src/product/product.repository.js

const prisma = require('../db');

const getAllProducts = async () => {
    return await prisma.product.findMany();
};

const getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: { id: Number(id) }
    });
};

const addProduct = async (newProductData) => {
    return await prisma.product.create({
        data: newProductData
    });
};

const deleteProductById = async (id) => {
    return await prisma.product.delete({
        where: { id: parseInt(id) }
    });
};

const editProductById = async (id, updatedProductData) => {
    return await prisma.product.update({
        where: { id: parseInt(id) },
        data: updatedProductData
    });
};

const patchProductById = async (id, updatedProductData) => {
    return await prisma.product.update({
        where: { id: parseInt(id) },
        data: updatedProductData
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById,
    editProductById,
    patchProductById
};
