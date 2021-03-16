const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLObjectType } = require('graphql');
const SteelGradeEnumType = require('./SteelGradeEnumType');
const SteelSectionEnumType = require('./SteelSectionEnumType');

const RMDescriptionType = new GraphQLObjectType({
    name: 'SteelDescriptionType',
    description: 'Steel description type',
    fields: () => {
        return {
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
        }
    }
});

module.exports = RMDescriptionType;