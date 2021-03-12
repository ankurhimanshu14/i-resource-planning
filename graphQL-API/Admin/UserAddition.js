const { GraphQLNonNull, GraphQLString } = require('graphql');
const userType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/addUser.sql')).toString();

const addUser = {
    type: userType,
    args: {
        fullName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
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