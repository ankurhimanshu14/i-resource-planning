const {GraphQLNonNull, GraphQLString} = require('graphql');
const path = require('path')
const steelType = require('./UserType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/updateSteel.sql')).toString();

const updateSteel = {
    type: steelType,
    args: {
        challanNo: { type:  GraphQLNonNull(GraphQLString) },
        heatNo: { type: new GraphQLNonNull(GraphQLString) },
        approvedComponents: { type: [Components] }
    },
    resolve: async (root, args) => {
        const updatedSteel = await queryFunction(_statement, [args.fullName, args.password]);
        if(!updatedSteel) {
            throw new Error('Error')
        }
        return updatedSteel;
    }
}

module.exports = updateSteel;