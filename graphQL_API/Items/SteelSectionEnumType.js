const { GraphQLEnumType } = require('graphql');

const SteelSectionEnumType = new GraphQLEnumType({
    name: 'SteelSectionEnumType',
    values: {
        DIA: {
            value: 'DIA'
        },
        RCS: {
            value: 'RCS'
        }
    }
});

module.exports = SteelSectionEnumType;