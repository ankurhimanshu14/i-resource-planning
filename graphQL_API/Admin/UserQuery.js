const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql');
const UserType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');
const decrypt = require('../../_helpers/decrypt');

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

                    const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/Admin/findUser.sql')).toString();
                    const User = await queryFunction(_statement, args.username)
                    if (!User) {
                        throw new Error('Error in fetching data')
                    } else {
                        const jsonString = JSON.stringify(User);
                        const parsedObject = JSON.parse(jsonString)[0];
                        const hashPassword = parsedObject.password;
                        
                        const validatedUser = await decrypt(args.password, hashPassword);
                        if(!validatedUser) {
                            throw new Error("Wrong Crendentials");
                        } else {
                            console.log("Login Success");
                            return User
                        }
                    }

                }
            }
        }
    }
});

module.exports = UserQuery;