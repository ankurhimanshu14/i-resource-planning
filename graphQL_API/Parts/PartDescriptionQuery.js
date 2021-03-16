const { GraphQLObjectType, GraphQLList } = require('graphql');
const PartDescriptionType = require('./PartDescriptionType');
const queryFunction = require('../../dBConfig/queryFunction');
const fs = require('fs');
const path = require('path');

const PartDescriptionQuery = new GraphQLObjectType({
    name: 'PartDescriptionsQuery',
    fields : () => {
        return {
            PartDescriptions: {
                type: new GraphQLList(PartDescriptionType),
                resolve: async () => {

                    const _statement = fs.readFileSync(path.join(__dirname + '../../../sql/PartsDescription/allPartDescriptions.sql')).toString();
                    const PartDescriptions = await queryFunction(_statement);
                    if(!PartDescriptions) {
                        throw new Error('Error in fetching data.');
                    }
                    return PartDescriptions;
                }
            }
        }
    }
});

module.exports = PartDescriptionQuery;