const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLFloat, GraphQLInt } = require('graphql');
// const DateTime = require('../DateTime/DateTime');
// const UserType = require('../Admin/UserType');
const SteelDescriptionType = require('../Steels/SteelDescriptionType');
const PartDescriptionType = require('../Parts/PartDescriptionType');
const SteelSectionEnumType = require('../Steels/SteelSectionEnumType');
const PartProfileEnumType = require('../Parts/PartProfileEnumType');
const SteelGradeEnumType = require('../Steels/SteelGradeEnumType');

const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    description: 'Product type definition',
    interfaces: [PartDescriptionType, SteelDescriptionType],
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        number: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
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
        barSection: {
            type: new GraphQLNonNull(SteelSectionEnumType)
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