const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLScalarType, GraphQLObjectType } = require('graphql');
const steelType = require('./SteelType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement1 = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/createSteelTable.sql')).toString();
const _statement2 = fs.readFileSync(path.join(__dirname + '/../../sql/Steel/addSteel.sql')).toString();

const addSteel = {
    type: steelType,
    args: {
        challanNo: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        challanDate: {
            type: new GraphQLNonNull(new GraphQLScalarType)
        },
        grade: {
            type: new GraphQLNonNull(GraphQLString)
        },
        section: {
            type: new GraphQLNonNull(GraphQLString)
        },
        heatNo: {
            type: new GraphQLNonNull(GraphQLString)
        },
        heatCode: {
            type: GraphQLString
        },
        approvedComponents: {
            type: new GraphQLObjectType(GraphQLString)
        },
        receivedQty: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        releasedQty: {
            type: GraphQLInt
        },
        releasedQty: {
            type: GraphQLInt
        },
        uom: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, args) => {
        
        const createdTable = await queryFunction(_statement1);
        if(!createdTable) {
            throw new Error('Error in creating table');
        }

        const _args = Object.values(args);
        const newSteel = await queryFunction(_statement2, _args);
        if(!newSteel) {
            throw new Error('error');
        }
        return newSteel;
    }
};

module.exports = addSteel;