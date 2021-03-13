const { GraphQLNonNull, GraphQLString } = require('graphql');
const userType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');
const encrypt = require('../../_helpers/encrypt');

const _statement1 = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/createUserTable.sql')).toString();
const _statement2 = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/addUser.sql')).toString();

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

        const createdTable = await queryFunction(_statement1);
        if(!createdTable) {
            throw new Error('Error in creating table');
        }
        
        args.password = await encrypt(args.password, 10);

        const _args = Object.values(args);

        const newUser = await queryFunction(_statement2, _args);
        if(!newUser) {
            throw new Error('Error in adding a new user');
        }
        return newUser;
    }
};

module.exports = addUser;