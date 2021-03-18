const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLFloat, GraphQLInt } = require('graphql');
const DateTime = require('../../DateTime/DateTime');

const PartType = new GraphQLObjectType({
    name: 'PartType',
    description: 'Part type definition',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        itemCode: {
            type: new GraphQLNonNull(GraphQLID)
        },
        partNumber: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        partName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        materialGrade: {
            type: new GraphQLNonNull(GraphQLString)
        },
        alternateMatGrade: {
            type: GraphQLString
        },
        forgingWeight: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        UOM_Weight: {
            type: GraphQLString
        },
        supplyCondition: {
            type: new GraphQLNonNull(GraphQLString)
        },
        drgIssueDate: {
            type: GraphQLNonNull(DateTime)
        }
    }
});

module.exports = PartType;