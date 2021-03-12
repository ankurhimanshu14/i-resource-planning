const graphql = require('graphql');
const path = require('path')
const userType = require('./UserType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/addUser.sql')).toString();

const addUser = {
    type: userType,
    args: {
        fullName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        username: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        password: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: async (root, args) => {
        
        const { email, ...rest } = args;
        const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const isValidEmail = emailExpression.test(String(email).toLowerCase());
        if(!isValidEmail) {
            throw new Error('Email is not proper format');
        };

        const _args = Object.values(args);

        const newUser = await queryFunction(_statement, _args);
        if(!newUser) {
            throw new Error('error');
        }
        return 'Success';
    }
};

module.exports = addUser;