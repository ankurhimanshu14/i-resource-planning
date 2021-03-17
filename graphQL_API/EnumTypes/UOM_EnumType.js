const { GraphQLEnumType } = require('graphql');

const UOM_EnumType = new GraphQLEnumType({
    name: 'UOM_EnumType',
    values: {
        WEIGHT: {
            value: 'kgs' || 'gms' || 'lbs' || 'MT'
        },
        NUMBER: {
            value: 'NOS'
        },
        LENGTH: {
            value: 'mm' || 'inches'
        },
        PRICE: {
            value: 'Rs' || '$'
        }
    }
});

module.exports = UOM_EnumType;