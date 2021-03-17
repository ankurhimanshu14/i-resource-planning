const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql');
const GRNEntryType = require('./GRNEntryType');
const DateTime = require('../DateTime/DateTime');
const ItemEnumType = require('../EnumTypes/ItemEnumType');
const UOM_EnumType = require('../EnumTypes/UOM_EnumType');
const queryFunction = require('../../dBConfig/queryFunction');
const fs = require('fs');
const path = require('path');

const AddGRN = {
    name: 'AddGRN',
    type: GRNEntryType,
    args: {
        grnNo: {
            type: new GraphQLNonNull(GraphQLFloat),
            defaultValue: Date.now()
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
    },
    resolve: async (parentValue, args, context, info) => {
        const _statement1 = fs.readFileSync(path.join(__dirname + '../../../sql/GRN/createGRNTable.sql')).toString();
        const createTable = await queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Table not created');
        }
        const _statement2 = fs.readFileSync(path.join(__dirname + '../../../sql/GRN/addGRN.sql')).toString();
        const _args = Object.values(args);
        const newGRN = await queryFunction(_statement2, _args);
        if(!newGRN) {
            throw new Error('Error in fetching data')
        }
        return newGRN;
    }
};

module.exports = AddGRN;