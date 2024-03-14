const {
    addProductHandler,
    getAllProductsHandler,
    getProductByIdHandler,
    editProductByIdHandler,
    deleteProductByIdHandler,
    patchProductByIdHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/products',
        handler: addProductHandler,
    },
    {
        method: 'GET',
        path: '/products',
        handler: getAllProductsHandler,
    },
    {
        method: 'GET',
        path: '/products/:id',
        handler: getProductByIdHandler,
    },
    {
        method: 'PUT',
        path: '/products/:id',
        handler: editProductByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/products/:id',
        handler: deleteProductByIdHandler,
    },
    {
        method: 'PATCH',
        path: '/products/:id',
        handler: patchProductByIdHandler,
    },
];

module.exports = routes;