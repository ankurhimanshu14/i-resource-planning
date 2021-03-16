const { GraphQLNonNull, GraphQLString, GraphQLInterfaceType } = require('graphql');
const PartProfileEnumType = require('./PartProfileEnumType');

const PartDescriptionType = new GraphQLInterfaceType({
    name: 'PartDescription',
    description: 'Part description type',
    fields: () => {
        return {
            number: {
                type: new GraphQLNonNull(GraphQLString)
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            profile: {
                type: new GraphQLNonNull(PartProfileEnumType)
            }
        }
    }
});

module.exports = PartDescriptionType;