const { GraphQLObjectType, GraphQLList } = require('graphql');
const GRNEntryType = require('./GRNEntryType');
const fs = require('fs');
const path = require('path');
const queryFunction = require('../../dBConfig/queryFunction');

const GRNQuery = new GraphQLObjectType({
    name: 'GRNQuery',
    fields: () => {
        return {
            grnEntries: {
                type: new GraphQLList(GRNEntryType),
                resolve: async () => {
                    _statement = fs.readFileSync(path.join(__dirname + '/../../sql/GRN/allgrnEntries.sql')).toString();

                    const grnEntries = await queryFunction(_statement);
                    if(!grnEntries) {
                        throw new Error('Error in fetching data')
                    }
                    return grnEntries;
                }
            }
        }
    }
});

module.exports = GRNQuery;