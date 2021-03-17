const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const PartMutation = require('./PartMutation');
const AllPartsQuery = require('./AllPartsQuery');
const PartQuery = require('./PartQuery');

const PartSchema = new GraphQLSchema({
    query: AllPartsQuery,
    query: PartQuery,
    mutation: new GraphQLObjectType({
        name: 'PartMutation',
        fields: PartMutation
    })
});

module.exports = PartSchema;