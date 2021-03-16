const PartDescriptionSchema = require('./Parts/PartDescriptionSchema');
const SteelDescriptionSchema = require('./Steels/SteelDescriptionSchema');

const routes = {
    PartDescription: {
        path: '/partDescription',
        schema: PartDescriptionSchema
    },
    SteelDescription: {
        path: '/steelDescription',
        schema: SteelDescriptionSchema
    }
};

module.exports = routes;