
const fs = require('fs');
const path = require('path');
const SteelType = require('./SteelType');
const queryFunction = require('../../../dBConfig/queryFunction');
const { GraphQLNonNull, GraphQLString, GraphQLFloat, GraphQLInt } = require('graphql');
const DateTime = require('../../DateTime/DateTime');


const AddSteel = {
    name: 'Steel',
    type: SteelType,
    args: {
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
            type: GraphQLString,
            defaultValue: "mm"
        }
    },
    resolve: async (parentValue, args, context, info) => {

        const _statement1 = fs.readFileSync(path.join(__dirname + '../../../../sql/Steel/createSteelTable.sql')).toString();
        const createTable = queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Steel Table not created');
        }

        const _args = Object.values(args);
        const _statement2 = fs.readFileSync(path.join(__dirname + '../../../../sql/Steel/addSteel.sql')).toString();

        const newSteel = queryFunction(_statement2, _args)
        if(!newSteel) {
            throw new Error('Error in fetching data')
        }
        return newSteel;
    }
}

module.exports = AddSteel;