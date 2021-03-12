const { GraphQLNonNull, GraphQLString } = require('graphql');
const userType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/deleteUser.sql')).toString();

const deleteUser = {
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
        const deletedUser = await queryFunction(_statement, [args.username, args.password])
        if(!deletedUser) {
            throw new Error('Error');
        }
        return deletedUser;
    }
};

module.exports = deleteUser;