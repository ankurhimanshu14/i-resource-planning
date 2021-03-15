const { GraphQLObjectType } = require("graphql");
const UserType = require('./UserType');
const UserRoleEnumType = require('./UserRoleEnumType');
const DateTime = require('../DateTime/DateTime');
const queryFunction = require('../../dBConfig/queryFunction');
const fs = require('fs');
const path = require('path');

const AddUser = new GraphQLObjectType({
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
        },
        created:  new GraphQLObjectType({
            createdBy: {
                type: new GraphQLNonNull(UserType),
                defaultValue: 'SUPER_USER'
            },
            createdAt: {
                type: new GraphQLNonNull(DateTime),
                defaultValue: () => (Date.now())
            }
        })
    },
    resolve: async (parentValue, args, context, info) => {

        const _args = Object.values(args).flat(Infinity);
        const _statement1 = fs.readFileSync(path.join(__dirname + '../../sql/Admin/createUserTable.sql')).toString();
        const _statement2 = fs.readFileSync(path.join(__dirname + '../../sql/Admin/addUser.sql')).toString();

        const createTable = await queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Error in creating table');
        }

        const newUser = await queryFunction(_statement2, _args);
        if(!newUser) {
            throw new Error('Error in fethcing the data');
        }
        return newUser;
    }
});

module.exports = AddUser;