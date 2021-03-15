const { GraphQLUnionType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLID } = require('graphql');
const SteelGradeEnumType = require('../RMYard/SteelGradeEnumType');
const DateTime = require('../DateTime/DateTime');
const UserType = require('../Admin/UserType');
const RMDescription = require('../RMYard/RMDescription');
const PartDescription = require('./PartDescription');

const PartType = new GraphQLUnionType({
    name: 'PartType',
    description: 'Part type definition',
    types: [PartDescription, RMDescription],
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        grossWeight: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        cutWeight: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        weight_UOM: {
            type: GraphQLNonNull(GraphQLString)
        },
        createdBy: {
            type: new GraphQLNonNull(UserType)
        },
        createdAt: {
            type: new GraphQLNonNull(DateTime)
        },
        updatedBy: {
            type: UserType
        },
        updatedAt: {
            type: DateTime
        }
    }
});

module.exports = PartType;