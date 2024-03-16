// Service layer bertujuan untuk handle business logic
// Kenapa dipisah? Supaya tanggung jawabnya ter-isolate, dan functions-nya
// reusable

const productRepository = require('./product.repository');

const getAllProducts = async () => {
    return await productRepository.findProducts();
};

const getProductById = async (id) => {
    return await productRepository.findProductById(id);
};

const addProduct = async (newProductData) => {
    const findProducts = await findProductByName(newProductData.name);

    if(findProducts){
        throw new Error('Product already exists');
    }

    return await productRepository.insertProduct(newProductData);
};

const deleteProductById = async (id) => {
    return await productRepository.deleteProduct(id);
};

const editProductById = async (id, updatedProductData) => {
    return await productRepository.editProduct(id, updatedProductData);
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
