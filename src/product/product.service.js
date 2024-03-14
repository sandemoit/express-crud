// Service layer bertujuan untuk handle business logic
// Kenapa dipisah? Supaya tanggung jawabnya ter-isolate, dan functions-nya
// reusable

const productRepository = require('./product.repository');

const getAllProducts = async () => {
    return await productRepository.getAllProducts();
};

const getProductById = async (id) => {
    return await productRepository.getProductById(id);
};

const addProduct = async (newProductData) => {
    return await productRepository.addProduct(newProductData);
};

const deleteProductById = async (id) => {
    return await productRepository.deleteProductById(id);
};

const editProductById = async (id, updatedProductData) => {
    return await productRepository.editProductById(id, updatedProductData);
};

const patchProductById = async (id, updatedProductData) => {
    return await productRepository.patchProductById(id, updatedProductData);
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById,
    editProductById,
    patchProductById
};
