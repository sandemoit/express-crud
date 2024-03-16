// Berkomunikasi dengan database
// Boleh pake ORM, boleh raw query
// Supaya apa? Supaya kalo mau ganti2 ORM tinggal edit di file ini aja

const prisma = require('../db');

const findProducts = async () => {
    return await prisma.product.findMany();
};

const findProductById = async (id) => {
    return await prisma.product.findUnique({
        where: { id: Number(id) }
    });
};

const insertProduct = async (newProductData) => {
    return await prisma.product.create({
        data: newProductData
    });
};

const deleteProduct = async (id) => {
    return await prisma.product.delete({
        where: { id: parseInt(id) }
    });
};

const editProduct = async (id, updatedProductData) => {
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

const findProductByName = async (name) => {
    return await prisma.product.findFirst({
        where: { name: name }
    });
}

module.exports = {
    findProducts,
    findProductById,
    insertProduct,
    deleteProduct,
    editProduct,
    patchProductById,
    findProductByName
};
