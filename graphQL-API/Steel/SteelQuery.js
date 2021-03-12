const graphql = require('graphql');
const path = require('path')
const userType = require('./UserType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/allUsers.sql')).toString();

const userQuery = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users: {
                type: new graphql.GraphQLList(userType),
                resolve: async () => {
                    const users = await queryFunction(_statement);
                    if(!users) {
                        throw new Error('Error while fetching data')
                    }
                    return users;
                }
            }
        }
    }
})

module.exports = userQuery;