const { GraphQLEnumType } = require('graphql');

const UserRoleEnumType = new GraphQLEnumType({
    name: 'UserRoleEnum',
    description: 'User role type definition.',
    values: {
        ROOT: {
            value: 0
        },
        SUPER_USER: {
            value: 1
        },
        USER: {
            value: 2
        }
    }
});

module.exports = UserRoleEnumType;