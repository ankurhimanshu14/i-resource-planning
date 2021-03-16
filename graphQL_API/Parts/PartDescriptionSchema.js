const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const PartDescriptionMutation = require('./PartDescriptionMutation');
const PartDescriptionQuery = require('./PartDescriptionQuery');

const PartDescriptionSchema = new GraphQLSchema({
    query: PartDescriptionQuery,
    mutation: new GraphQLObjectType({
        name: 'PartDescriptionMutation',
        fields: PartDescriptionMutation
    })
});

module.exports = PartDescriptionSchema;