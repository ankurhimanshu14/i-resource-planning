const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const ProductMutation = require('./ProductMutation');
const ProductQuery = require('./ProductQuery');

const ProductSchema = new GraphQLSchema({
    query: ProductQuery,
    mutation: new GraphQLObjectType({
        name: 'ProductMutation',
        fields: ProductMutation
    })
});

module.exports = ProductSchema;