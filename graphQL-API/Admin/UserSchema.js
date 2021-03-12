var graphql = require('graphql')
var UserQuery = require('./UserQuery');
var UserMutation = require('./UserMutation');

const UserSchema = new graphql.GraphQLSchema({
    query: UserQuery,
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutation',
        fields: {UserMutation}
    })
});

module.exports = UserSchema;