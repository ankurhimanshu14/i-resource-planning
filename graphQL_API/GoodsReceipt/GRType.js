const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID, GraphQLFloat, GraphQLInt } = require('graphql');
const DateTime = require('../../DateTime/DateTime');

const GRType = new GraphQLObjectType({
    name: 'GRType',
    description: 'Goods Receipt type definition',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        itemCode: {
            type: new GraphQLNonNull(GraphQLID)
        },
        GRNNumber: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        itemDescription: {
            type: new GraphQLNonNull(GraphQLString)
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

module.exports = GRType;