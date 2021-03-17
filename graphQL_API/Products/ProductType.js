const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLFloat, GraphQLInt } = require('graphql');
const SteelSectionEnumType = require('./SteelSectionEnumType');
const PartProfileEnumType = require('./PartProfileEnumType');
const SteelGradeEnumType = require('./SteelGradeEnumType');

const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    description: 'Product type definition',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
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
    }
});

module.exports = ProductType;