const ProductSchema = require('./Products/ProductSchema');
const routes = {
    Product: {
        path: '/product',
        schema: ProductSchema
    },
};

module.exports = routes;