const { GraphQLNonNull, GraphQLString } = require("graphql");
const UserType = require('./UserType');
const UserRoleEnumType = require('./UserRoleEnumType');
const queryFunction = require('../../dBConfig/queryFunction');
const fs = require('fs');
const path = require('path');
const encrypt = require("../../_helpers/encrypt");

const AddUser = {
    name: 'User',
    type: UserType,
    args: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        role: {
            type: new GraphQLNonNull(UserRoleEnumType),
            defaultValue: 'USER'
        }
    },
    resolve: async (parentValue, args, context, info) => {

        const _statement1 = fs.readFileSync(path.join(__dirname + '../../../sql/Admin/createUserTable.sql')).toString();
        const _statement2 = fs.readFileSync(path.join(__dirname + '../../../sql/Admin/addUser.sql')).toString();

        const createTable = await queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Error in creating table');
        }

        args.password = await encrypt(args.password, 10);
        const _args = Object.values(args);
        const newUser = await queryFunction(_statement2, _args);
        if(!newUser) {
            throw new Error('Error in fetching the data');
        }
        return newUser;
    }
};

module.exports = AddUser;