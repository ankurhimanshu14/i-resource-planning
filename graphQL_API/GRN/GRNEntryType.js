const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLFloat } = require('graphql');
const DateTime = require('../DateTime/DateTime');
const ItemEnumType = require('../EnumTypes/ItemEnumType');
const UOM_EnumType = require('../EnumTypes/UOM_EnumType');
const GRNEntryType = new GraphQLObjectType({
    name: 'GRNEntryType',
    description: 'GRN Entry type definition',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        grnNo: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        challanNo: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        challanDate: {
            type: new GraphQLNonNull(DateTime)
        },
        partyCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        vehicleNo: {
            type: GraphQLString
        },
        itemCode: {
            type: new GraphQLNonNull(ItemEnumType)
        },
        itemDescription: {
            type: new GraphQLNonNull(GraphQLString)
        },
        quantity: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        UOM: {
            type: new GraphQLNonNull(UOM_EnumType)
        }
    }
});

module.exports = GRNEntryType;