const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const UserQuery = new GraphQLObjectType({
    name: 'UserQuery',
    fields: () => {
        return {
            Users: {
                type: GraphQLList(UserType),
                resolve: async () => {
                    const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Admin/allUsers.sql')).toString();

                    const Users = await queryFunction(_statement);
                    if(!Users) {
                        throw new Error('Error while fetching data');
                    }
                    return Users;
                }
            },
            User: {
                type: UserType,
                args: {
                    username: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    password: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: async (parentValue, args, context, info) => {
                    const _args = Object.values(args);
                    const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Admin/findUser.sql')).toString();
                    const User = await queryFunction(_statement, _args)
                }
            }
        }
    }
});

module.exports = UserQuery;