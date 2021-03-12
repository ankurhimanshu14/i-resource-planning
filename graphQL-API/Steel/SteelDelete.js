const graphql = require('graphql');
const path = require('path')
const userType = require('./UserType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/deleteUser.sql')).toString();

const deleteUser = {
    type: userType,
    args: {
        username: { type: new graphql.GraphQLObjectType(graphql.GraphQLString) },
        password: { type: new graphql.GraphQLObjectType(graphql.GraphQLString) },
    },
    resolve: async (root, args) => {
        const deletedUser = await queryFunction(_statement, [args.username, args.password]);
        if(!deletedUser) {
            throw new Error('Error')
        }
        return deletedUser;
    }
};

module.exports = deleteUser;