const { GraphQLNonNull, GrapghQLID } = require('graphql');
const path = require('path')
const steelType = require('./SteelType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/deleteUser.sql')).toString();

const deleteSteel = {
    type: steelType,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: async (root, args) => {
        const _args = Object.values(args);

        const deletedSteel = await queryFunction(_statement, _args);
        if(!deletedSteel) {
            throw new Error('Error')
        }
        return deletedSteel;
    }
};

module.exports = deleteSteel;