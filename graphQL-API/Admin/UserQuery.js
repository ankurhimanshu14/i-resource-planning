const { GraphQLObjectType, GraphQLList } = require('graphql');
const userType = require('./UserType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Admin/allUsers.sql')).toString();

const UserQuery = new GraphQLObjectType({
    name: 'UserQuery',
    fields: () => {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve: async () => {
                    const users = await queryFunction(_statement)
                    if(!users) {
                        throw new Error('Error while fetching data')
                    }
                    return users;
                }
            }
        }
    }
});

module.exports = UserQuery;