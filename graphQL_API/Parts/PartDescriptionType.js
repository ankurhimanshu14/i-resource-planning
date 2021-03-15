const { GraphQLNonNull, GraphQLString, GraphQLObjectType } = require('graphql');
const PartProfileEnumType = require('./PartProfileEnumType');

const PartDescriptionType = new GraphQLObjectType({
    number: {
        type: new GraphQLNonNull(GraphQLString)
    },
    name: {
        type: new GraphQLNonNull(GraphQLString)
    },
    profile: {
        type: new GraphQLNonNull(PartProfileEnumType)
    }
});

module.exports = PartDescriptionType;