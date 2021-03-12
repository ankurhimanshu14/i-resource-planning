const graphql = require('graphql');
const path = require('path')
const userType = require('./UserType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/addUser.sql')).toString();

const addUser = {
    type: userType,
    args: {
        fullName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        username: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        password: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: async (root, args) => {
        const newUser = await queryFunction(_statement, [args.fullName, args.email, args.username, args.password]);
        if(!newUser) {
            throw new Error('error');
        }
        return newUser;
    }
};

module.exports = addUser;