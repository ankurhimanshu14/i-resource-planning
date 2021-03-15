const UserSchema = require('./Admin/UserSchema');
const SteelSchema = require('./Steel/SteelSchema');
const EmployeeSchema = require('./Employee/EmployeeSchema');

const routes = {
    users: {
    path: '/users',
    schema: UserSchema
    },
    steels: {
        path: '/steels',
        schema: SteelSchema
    },
    employees: {
        path: '/employees',
        schema: EmployeeSchema
    }
}

module.exports = routes;