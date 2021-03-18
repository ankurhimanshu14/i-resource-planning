const fs = require('fs');
const path = require('path');
const PartType = require('./PartType');
const queryFunction = require('../../../dBConfig/queryFunction');
const { GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLInt, GraphQLID, UniqueDirectiveNamesRule } = require('graphql');
const DateTime = require('../../DateTime/DateTime');
const uuid = require('uuid');

const AddPart = {
    name: 'Part',
    type: PartType,
    args: {
        itemCode: {
            type: new GraphQLNonNull(GraphQLID),
            defaultValue: uuid.v4()
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
            type: new GraphQLNonNull(GraphQLString),
            defaultValue: "kg"
        },
        supplyCondition: {
            type: new GraphQLNonNull(GraphQLString)
        },
        drgIssueDate: {
            type: GraphQLNonNull(DateTime)
        }
    },
    resolve: async (parentValue, args, context, info) => {

        const _statement1 = fs.readFileSync(path.join(__dirname + '../../../../sql/Part/createPartTable.sql')).toString();
        const createTable = queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Part Table not created');
        }

        const _args = Object.values(args);
        const _statement2 = fs.readFileSync(path.join(__dirname + '../../../../sql/Part/addPart.sql')).toString();

        const newPart = queryFunction(_statement2, _args)
        if(!newPart) {
            throw new Error('Error in fetching data')
        }
        return newPart;
    }
}

module.exports = AddPart;