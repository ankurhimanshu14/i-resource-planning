const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const PartMutation = require('./PartMutation');
const PartQuery = require('./PartQuery');

const PartSchema = new GraphQLSchema({
    query: PartQuery,
    mutation: new GraphQLObjectType({
        name: 'PartMutation',
        fields: PartMutation
    })
});

module.exports = PartSchema;