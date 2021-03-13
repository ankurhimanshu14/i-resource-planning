const { GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');
const steelType = require('./SteelType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Steel/updateSteel.sql')).toString();

const updateSteel = {
    type: steelType,
    args: {
        challanNo: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        heatNo: {
            type: new GraphQLNonNull(GraphQLString)
        },
        issuedQty: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (root, args) => {

        const _args = Object.values(args);
        console.log(_args);
        const updatedSteel = await queryFunction(_statement, [args.challanNo, args.heatNo, args.issuedQty]);
        if(!updatedSteel) {
            throw new Error('Error');
        }
        return updatedSteel;
    }
}

module.exports = updateSteel;