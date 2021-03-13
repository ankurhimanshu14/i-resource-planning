const { GraphQLObjectType, GraphQLList } = require('graphql');
const userType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');
const comparePassword = require('../../_helpers/decrypt');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/allUsers.sql')).toString();

const UserLogin = new GraphQLObjectType({
    name: 'LoginQuery',
    fields: () => {
        return {
            user: {
                type: userType,
                args: {
                    username: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    password: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    clientPassword: {
                        type: GraphQLString
                    }
                },
                resolve: async (root, args) => {

                    const { clientPassword, password, username } = args;

                    if(comparePassword(clientPassword, password)) {

                        const users = await queryFunction(_statement, [username, password])
                        if(!users) {
                            throw new Error('Error while fetching data')
                        }
                        return user.username;
                    }

                }
            }
        }
    }
});

module.exports = UserLogin;