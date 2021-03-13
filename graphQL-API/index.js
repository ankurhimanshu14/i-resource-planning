const UserSchema = require('./Admin/UserSchema');
const SteelSchema = require('./Steel/SteelSchema');

const routes = {
    users: {
    path: '/users',
    schema: UserSchema
    },
    steels: {
        path: '/steels',
        schema: SteelSchema
    }
}

module.exports = routes;