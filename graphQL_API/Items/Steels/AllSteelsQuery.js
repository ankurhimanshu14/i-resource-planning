const { GraphQLObjectType, GraphQLList } = require('graphql');
const queryFunction = require('../../../dBConfig/queryFunction');
const SteelType = require('./SteelType');
const fs = require('fs');
const path = require('path');

const AllSteelsQuery = new GraphQLObjectType({
    name: 'AllSteelsQuery',
    fields: () => {
        return {
            Steels: {
                type: new GraphQLList(SteelType),
                resolve: async () => {

                    const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Steel/allSteels.sql')).toString();
                    const Steels = await queryFunction(_statement);
                    if(!Steels) {
                        throw new Error('Error in fetching data');
                    }
                    return Steels;
                }
            }
        }
    }
});

module.exports = AllSteelsQuery;