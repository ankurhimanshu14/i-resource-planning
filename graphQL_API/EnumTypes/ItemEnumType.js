const { GraphQLEnumType } = require('graphql');

const ItemEnumType = new GraphQLEnumType({
    name: 'ItemEnumType',
    values: {
        STEEL: {
            value: 'STEEL'
        },
        DIES: {
            value: 'DIES'
        }
    }
});

module.exports = ItemEnumType;