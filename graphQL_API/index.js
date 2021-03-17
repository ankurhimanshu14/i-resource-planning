const PartSchema = require('./Items/Parts/PartSchema');
const GRNSchema = require('./GRN/GRNSchema');
const SteelSchema = require('./Items/Steels/SteelSchema');
const routes = {
    Part: {
        path: '/part',
        schema: PartSchema
    },
    GRN: {
        path: '/grn',
        schema: GRNSchema
    },
    Steel: {
        path: '/steel',
        schema: SteelSchema
    }
};

module.exports = routes;