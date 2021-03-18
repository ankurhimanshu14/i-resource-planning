const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const UserMutation = require('./UserMutation');
const UserQuery = require('./UserQuery');

const UserSchema = new GraphQLSchema({
    query: UserQuery,
    mutation: new GraphQLObjectType({
        name: 'UserMutation',
        fields: UserMutation
    })
});

module.exports = UserSchema;