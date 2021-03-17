const ProductSchema = require('./Products/ProductSchema');
const GRNSchema = require('./GRN/GRNSchema');
const routes = {
    Product: {
        path: '/product',
        schema: ProductSchema
    },
    GRN: {
        path: '/grn',
        schema: GRNSchema
    }
};

module.exports = routes;