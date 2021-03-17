const { GraphQLEnumType } = require('graphql');

const PartyEnumType = new GraphQLEnumType({
    name: 'PartyEnumType',
    values: {
        N001: {
            value: {
                name: 'New Allenberry Works',
                location: 'Faridabad'
            }
        },
        N002: {
            value: {
                name: 'New Allenberry Works',
                location: 'Bhagola, Palwal'
            }
        },
        N003: {
            value: {
                name: 'New Allenberry Works',
                location: 'Rudrapur'
            }
        },
        K001: {
            value: {
                name: 'Kisco Steels Ltd',
                location: 'Ludhiana'
            }
        },
        R001: {
            value: {
                name: 'Rattan Hammers',
                location: 'Ludhiana'
            }
        }
    }
});

module.exports = PartyEnumType;