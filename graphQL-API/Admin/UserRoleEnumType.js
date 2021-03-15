const { GraphQLEnumType }  = require('graphql');

const UserRoleEnumType = new GraphQLEnumType({
    name: 'UserRoleEnum',
    values: {
        ROOT: {
            value: 0
        },
        SUPERUSER: {
            value: 1
        },
        USER: {
            value: 2
        }
    }
});

module.exports = UserRoleEnumType;