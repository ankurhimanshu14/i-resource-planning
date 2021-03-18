const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt } = require('graphql');
const queryFunction = require('../../../dBConfig/queryFunction');
const PartType = require('./PartType');
const fs = require('fs');
const path = require('path');

const PartQuery = new GraphQLObjectType({
    name: 'PartQuery',
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
            },

            Part: {
                type: new GraphQLList(PartType),
                args: {
                    partNumber: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: async (parentValue, args, context, info) => {

                    const _args = Object.values(args);
                    const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Part/findPart.sql')).toString();
                    const Part = await queryFunction(_statement, _args);
                    if(!Part) {
                        throw new Error('Error in fetching data');
                    }
                    return Part;
                }
            }
        }
    }
});

module.exports = PartQuery;