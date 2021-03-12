const { GraphQLNonNull, GraphQLString } = require('graphql');
const userType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/updateUser.sql')).toString();

const updateUser = {
    type: userType,
    args: {
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, args) => {
        const updatedUser = await queryFunction(_statement, [args.password, args.username]);
        if(!updatedUser) {
            throw new Error('Error');
        }
        return updatedUser;
    }
}

module.exports = updateUser;