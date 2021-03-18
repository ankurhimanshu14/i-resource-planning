const UserSchema = require('./Admin/UserSchema');
const PartSchema = require('./Items/Parts/PartSchema');
// const GRNSchema = require('./GRN/GRNSchema');
const SteelSchema = require('./Items/Steels/SteelSchema');
const routes = {
    User: {
        path: '/user',
        schema: UserSchema
    },
    Part: {
        path: '/part',
        schema: PartSchema
    },
    // GRN: {
    //     path: '/grn',
    //     schema: GRNSchema
    // },
    Steel: {
        path: '/steel',
        schema: SteelSchema
    }
};

module.exports = routes;