const { GraphQLObjectType, GraphQLList } = require('graphql');
const steelType = require('./SteelType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Steel/allSteels.sql')).toString();

const SteelQuery = new GraphQLObjectType({
    name: 'SteelQuery',
    fields: () => {
        return {
            steels: {
                type: new GraphQLList(steelType),
                resolve: async () => {
                    const steels = await queryFunction(_statement)
                    if(!steels) {
                        throw new Error('Error while fetching data')
                    }
                    return steels;
                }
            }
        }
    }
});

module.exports = SteelQuery;