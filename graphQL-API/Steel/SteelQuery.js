const { GraphQLObjectType, GraphQLList } = require('graphql');
const path = require('path')
const steelType = require('./SteelType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/allUsers.sql')).toString();

const steelQuery = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            steels: {
                type: new GraphQLList(steelType),
                resolve: async () => {
                    const steels = await queryFunction(_statement);
                    if(!steels) {
                        throw new Error('Error while fetching data')
                    }
                    return steels;
                }
            }
        }
    }
})

module.exports = steelQuery;