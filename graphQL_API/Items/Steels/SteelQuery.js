const { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } = require('graphql');
const queryFunction = require('../../../dBConfig/queryFunction');
const SteelType = require('./SteelType');
const fs = require('fs');
const path = require('path');

const SteelQuery = new GraphQLObjectType({
    name: 'SteelQuery',
    fields: () => {
        return {
            Steel: {
                type: new GraphQLList(SteelType),
                args: {
                    materialGrade: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: async (parentValue, args, context, info) => {

                    const _args = Object.values(args);
                    const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Steel/findSteel.sql')).toString();
                    const Steel = await queryFunction(_statement, _args);
                    if(!Steel) {
                        throw new Error('Error in fetching data');
                    }
                    return Steel;
                }
            }
        }
    }
});

module.exports = SteelQuery;