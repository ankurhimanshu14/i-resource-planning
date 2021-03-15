const { GraphQLNonNull, GraphQLString, GraphQLObjectType } = require('graphql');
const SteelGradeEnumType = require('../RMYard/SteelGradeEnumType');
const SteelSectionEnumType = require('../RMYard/SteelSectionEnumType');

const RMDescriptionType = new GraphQLObjectType({
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
    }
});

module.exports = RMDescriptionType;