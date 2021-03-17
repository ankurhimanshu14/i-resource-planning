const { GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLInt } = require('graphql');
const ProductType = require('./ProductType');
const fs = require('fs');
const path = require('path');
const queryFunction = require('../../dBConfig/queryFunction');
const PartProfileEnumType = require('./PartProfileEnumType');
const SteelGradeEnumType = require('./SteelGradeEnumType');
const SteelSectionEnumType = require('./SteelSectionEnumType');

const AddProduct = {
    name: 'Product',
    type: ProductType,
    args: {
        partNumber: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        partName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        profile: {
            type: new GraphQLNonNull(PartProfileEnumType)
        },
        grade: {
            type: new GraphQLNonNull(SteelGradeEnumType)
        },
        barDimension: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        barDimension_UOM: {
            type: new GraphQLNonNull(GraphQLString)
        },
        barCrossSection: {
            type: new GraphQLNonNull(GraphQLString)
        },
        grossWeight: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        cutWeight: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        weight_UOM: {
            type: GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (parentValue, args, context, info) => {

        const _statement1 = fs.readFileSync(path.join(__dirname + '../../../sql/Product/createProductTable.sql')).toString();
        const createTable = queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Product Table not created');
        }

        const _args = Object.values(args);
        const _statement2 = fs.readFileSync(path.join(__dirname + '../../../sql/Product/addProducts.sql')).toString();

        const newProduct = queryFunction(_statement2, _args)
        if(!newProduct) {
            throw new Error('Error in fethcing data')
        }
        return newProduct;
    }
}

module.exports = AddProduct;