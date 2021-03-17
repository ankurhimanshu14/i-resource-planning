const { GraphQLObjectType, GraphQLList } = require('graphql');
const queryFunction = require('../../../dBConfig/queryFunction');
const PartType = require('./PartType');
const fs = require('fs');
const path = require('path');

const AllPartsQuery = new GraphQLObjectType({
    name: 'AllPartsQuery',
    fields: () => {
        return {
            Parts: {
                type: new GraphQLList(PartType),
                resolve: async () => {

                    const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Part/allParts.sql')).toString();
                    const Parts = await queryFunction(_statement);
                    if(!Parts) {
                        throw new Error('Error in fetching data');
                    }
                    return Parts;
                }
            }
        }
    }
});

module.exports = AllPartsQuery;