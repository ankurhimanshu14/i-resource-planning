const { GraphQLObjectType, GraphQLList } = require('graphql');
const SteelDescriptionType = require('./SteelDescriptionType');
const queryFunction = require('../../dBConfig/queryFunction');
const fs = require('fs');
const path = require('path');

const SteelDescriptionQuery = new GraphQLObjectType({
    name: 'SteelDescriptionsQuery',
    fields : () => {
        return {
            SteelDescriptions: {
                type: new GraphQLList(SteelDescriptionType),
                resolve: async () => {

                    const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/SteelsDescription/allSteelDescriptions.sql')).toString();
                    const SteelDescriptions = await queryFunction(_statement);
                    if(!SteelDescriptions) {
                        throw new Error('Error in fetching data.');
                    }
                    return SteelDescriptions;
                }
            }
        }
    }
});

module.exports = SteelDescriptionQuery;