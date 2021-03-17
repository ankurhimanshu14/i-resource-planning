const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const SteelMutation = require('./SteelMutation');
const AllSteelsQuery = require('./AllSteelsQuery');
const SteelQuery = require('./SteelQuery');

const SteelSchema = new GraphQLSchema({
    query: AllSteelsQuery,
    query: SteelQuery,
    mutation: new GraphQLObjectType({
        name: 'SteelMutation',
        fields: SteelMutation
    })
});

module.exports = SteelSchema;