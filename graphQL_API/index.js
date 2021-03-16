const PartDescriptionSchema = require('./Parts/PartDescriptionSchema');
const SteelDescriptionSchema = require('./Steels/SteelDescriptionSchema');
const ProductSchema = require('./Products/ProductSchema');
const routes = {
    PartDescription: {
        path: '/partDescription',
        schema: PartDescriptionSchema
    },
    SteelDescription: {
        path: '/steelDescription',
        schema: SteelDescriptionSchema
    },
    Product: {
        path: '/product',
        schema: ProductSchema
    },
};

module.exports = routes;