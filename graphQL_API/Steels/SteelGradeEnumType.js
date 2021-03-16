const { GraphQLEnumType } = require('graphql');

const SteelGradeEnumType = new GraphQLEnumType({
    name: 'SteelGradeEnumType',
    values: {
        _16MNCR5: {
            value: '16MNCR5'
        },
        _20MNCR5: {
            value: '20MNCR5'
        },
        _25MoCr4: {
            value: '25MOCR4'
        },
        _SAE8620: {
            value: 'SAE8620'
        },
        _SCM420H: {
            value: 'SCM420H'
        },
        _SCR420H: {
            value: 'SCR420H'
        },
        _SCR415H: {
            value: 'SCR415H'
        },
        _815M17: {
            value: '815M17'
        },
        _EN353: {
            value: 'EN353'
        },
        _EN8D: {
            value: 'EN8D'
        },
        _S53C: {
            value: 'S53C'
        },
        _40CR4: {
            value: '40CR4'
        },
        _EN15A: {
            VALUE: 'EN15A'
        }
    }
});

module.exports = SteelGradeEnumType;