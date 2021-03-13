const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const UserQuery = require('./UserQuery');
const UserMutation = require('./UserMutation');

const UserSchema = new GraphQLSchema ({
    userQuery: UserQuery,
    mutation: new GraphQLObjectType({
        name: 'UserMutation',
        fields: UserMutation
    })
})

module.exports = UserSchema;