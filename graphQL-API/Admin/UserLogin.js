const { GraphQLObjectType, GraphQLString } = require('graphql');
const userType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');
const comparePassword = require('../../_helpers/decrypt');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/loginUser.sql')).toString();

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
                    clientPassword: {
                        type: GraphQLString
                    }
                },
                resolve: async (root, args) => {

                    const { clientPassword, username } = args;

                    const users = await queryFunction(_statement, [username, password])
                        if(!comparePassword(clientPassword, password)) {
                            throw new Error('Credentials do not match.')
                        }
                        return users;
                }
            }
        }
    }
});

module.exports = UserLogin;