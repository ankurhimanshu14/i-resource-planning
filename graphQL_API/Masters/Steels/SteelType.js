const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt } = require('graphql');

const SteelType = new GraphQLObjectType({
    name: 'SteelType',
    description: 'Steel type definition',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        itemCode: {
            type: new GraphQLNonNull(GraphQLID)
        },
        materialGrade: {
            type: new GraphQLNonNull(GraphQLString)
        },
        barDimension: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        barSectionType: {
            type: new GraphQLNonNull(GraphQLString)
        },
        UOM_Dimension: {
            type: GraphQLString
        }
    }
});

module.exports = SteelType;