var {GraphQLSchema, GraphQLObjectType} = require('graphql')
var SteelQuery = require('./SteelQuery');
var SteelMutation = require('./SteelMutation');

const SteelSchema = new GraphQLSchema({
    query: SteelQuery,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: SteelMutation
    })
});

module.exports = SteelSchema;