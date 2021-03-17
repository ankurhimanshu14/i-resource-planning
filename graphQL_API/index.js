const PartSchema = require('./Items/Parts/PartSchema');
const GRNSchema = require('./GRN/GRNSchema');
const routes = {
    Part: {
        path: '/part',
        schema: PartSchema
    },
    GRN: {
        path: '/grn',
        schema: GRNSchema
    }
};

module.exports = routes;