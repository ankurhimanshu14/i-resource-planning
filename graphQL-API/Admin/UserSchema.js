const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const UserQuery = require('./UserQuery');
const UserMutation = require('./UserMutation');

const UserSchema = new GraphQLSchema ({
    query: UserQuery,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: UserMutation
    })
})

module.exports = UserSchema;