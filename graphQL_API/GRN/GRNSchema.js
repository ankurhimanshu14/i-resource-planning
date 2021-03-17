const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const GRNQuery = require('./GRNQuery');
const GRNMutation = require('./GRNMutation');

const GRNSchema = new GraphQLSchema({
    query: GRNQuery,
    mutation: new GraphQLObjectType({
        name: 'GRNMutation',
        fields: GRNMutation
    })
});

module.exports = GRNSchema;