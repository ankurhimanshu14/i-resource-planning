const { GraphQLEnumType } = require('graphql');

const SteelSectionEnumType = new GraphQLEnumType({
    name: 'SteelSectionEnumType',
    values: {
        DIA: {
            value: 0
        },
        RCS: {
            value: 1
        }
    }
});

module.exports = SteelSectionEnumType;