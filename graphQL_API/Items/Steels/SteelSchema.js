const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const SteelMutation = require('./SteelMutation');
const SteelQuery = require('./SteelQuery');

const SteelSchema = new GraphQLSchema({
    query: SteelQuery,
    query: SteelQuery,
    mutation: new GraphQLObjectType({
        name: 'SteelMutation',
        fields: SteelMutation
    })
});

module.exports = SteelSchema;