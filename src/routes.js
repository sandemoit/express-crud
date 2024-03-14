const { 
    addProductHandler, 
    getAllProductsHandler, 
    getProductByIdHandler, 
    editProductByIdHandler, 
    deleteProductByIdHandler,
    patchProductByIdHandler
} = require('./index');
const routes = [
    {
        method: 'POST',
        path: '/',
        handler: addProductHandler,
    },
    {
        method: 'GET',
        path: '/',
        handler: getAllProductsHandler,
    },
    {
        method: 'GET',
        path: '/{id}',
        handler: getProductByIdHandler,
    },
    {
        method: 'PUT',
        path: '/{id}',
        handler: editProductByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/{id}',
        handler: deleteProductByIdHandler,
    },
    {
        method: 'PATCH',
        path: '/{id}',
        handler: patchProductByIdHandler,
    },
];

module.exports = routes;
