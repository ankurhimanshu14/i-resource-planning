const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const DateTime = require('../DateTime/DateTime');
const UserRoleEnumType = require('./UserRoleEnumType');

const UserType = new GraphQLObjectType({
    name: "UserType",
    description: "User type definition",
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        role: {
            type: new GraphQLNonNull(UserRoleEnumType)
        }
    }
});

module.exports = UserType;