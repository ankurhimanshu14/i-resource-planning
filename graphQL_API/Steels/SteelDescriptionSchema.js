const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const SteelDescriptionMutation = require('./SteelDescriptionMutation');
const SteelDescriptionQuery = require('./SteelDescriptionQuery');

const SteelDescriptionSchema = new GraphQLSchema({
    query: SteelDescriptionQuery,
    mutation: new GraphQLObjectType({
        name: 'SteelDescriptionMutation',
        fields: SteelDescriptionMutation
    })
});

module.exports = SteelDescriptionSchema;