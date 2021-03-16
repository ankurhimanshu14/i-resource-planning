const { GraphQLEnumType } = require('graphql');

const PartProfileEnumType = new GraphQLEnumType({
    name: 'PartProfileEnumType',
    values: {
        Gear: {
            value: 'Gear'
        },
        Shaft: {
            value: 'Shaft'
        }
    }
});

module.exports = PartProfileEnumType;