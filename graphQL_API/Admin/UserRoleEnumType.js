const { GraphQLEnumType } = require('graphql');

const UserRoleEnumType = new GraphQLEnumType({
    name: 'UserRoleEnum',
    description: 'User role type definition.',
    values: {
        ROOT: {
            value: 'ROOT'
        },
        SUPER_USER: {
            value: 'SUPER_USER'
        },
        USER: {
            value: 'USER'
        }
    }
});

module.exports = UserRoleEnumType;