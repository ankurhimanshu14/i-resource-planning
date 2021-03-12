const graphql = require('graphql');
const path = require('path')
const userType = require('./UserType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement1 = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/allUsers.sql')).toString();
const _statement2 = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/userByUsername.sql')).toString();

const userQuery = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users: {
                type: new graphql.GraphQLList(userType),
                resolve: async () => {
                    const users = await queryFunction(_statement1);
                    if(!users) {
                        throw new Error('Error while fetching data')
                    }
                    return users;
                }
            },
            userByUsername: {
                type: userType,
                args: {
                    username: { type:  graphql.GraphQLNonNull(graphql.GraphQLString) }
                },
                resolve: async (root, args) => {
                    const user = await queryFunction(_statement2, args.username);
                    if(!user) {
                        throw new Error('Error while fetching data')
                    }
                    return user;
                }
            }
        }
    }
})

module.exports = userQuery;