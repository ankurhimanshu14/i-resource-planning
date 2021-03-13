const { GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');
const steelType = require('./SteelType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Steel/deleteSteel.sql')).toString();

const deleteSteel = {
    type: steelType,
    args: {
        challanNo: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        heatNo: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, args) => {
        const _args = Object.values(args);
        const deletedSteel = await queryFunction(_statement, _args)
        if(!deletedSteel) {
            throw new Error('Error');
        }
        return deletedSteel;
    }
};

module.exports = deleteSteel;