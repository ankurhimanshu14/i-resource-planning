const { GraphQLEnumType } = require('graphql');

const PartProfileEnumType = new GraphQLEnumType({
    name: 'PartProfileEnumType',
    values: {
        Gear: {
            value: 0
        },
        Shaft: {
            value: 1
        }
    }
});

module.exports = PartProfileEnumType;