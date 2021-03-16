const { GraphQLObjectType, GraphQLList } = require('graphql');
const queryFunction = require('../../dBConfig/queryFunction');
const ProductType = require('./ProductType');
const fs = require('fs');
const path = require('path');

const ProductQuery = new GraphQLObjectType({
    name: 'ProductQuery',
    fields: () => {
        return {
            products: {
                type: new GraphQLList(ProductType),
                resolve: async () => {

                    const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Product/allProducts.sql')).toString();
                    const products = await queryFunction(_statement);
                    if(!products) {
                        throw new Error('Error in fetching data');
                    }
                    return products;
                }
            }
        }
    }
});

module.exports = ProductQuery;