const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const SteelQuery = require('./SteelQuery');
const SteelMutation = require('./SteelMutation');

const SteelSchema = new GraphQLSchema ({
    query: SteelQuery,
    mutation: new GraphQLObjectType({
        name: 'SteelMutation',
        fields: SteelMutation
    })
})

module.exports = SteelSchema;