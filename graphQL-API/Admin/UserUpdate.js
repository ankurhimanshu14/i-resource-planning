const graphql = require('graphql');
const path = require('path')
const userType = require('./UserType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/updateUser.sql')).toString();

const updateUser = {
    type: userType,
    args: {
        fullName: { type:  graphql.GraphQLNonNull(graphql.GraphQLString) },
        password: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: async (root, args) => {
        const updatedUser = await queryFunction(_statement, [args.fullName, args.password]);
        if(!updatedUser) {
            throw new Error('Error')
        }
        return updatedUser;
    }
}

module.exports = updateUser;