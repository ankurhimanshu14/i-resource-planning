const { GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString, GraphQLFloat } = require('graphql');
const DateTime = require('../DateTime/DateTime');
const PartType = require('../Masters/Parts/PartType');

const DataType = [
    {
        name: 'PartType',
        type: PartType,
        description: 'Part type definition',
        fields: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            itemCode: {
                type: new GraphQLNonNull(GraphQLID)
            },
            partNumber: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            partName: {
                type: new GraphQLNonNull(GraphQLString)
            },
            materialGrade: {
                type: new GraphQLNonNull(GraphQLString)
            },
            alternateMatGrade: {
                type: GraphQLString
            },
            forgingWeight: {
                type: new GraphQLNonNull(GraphQLFloat)
            },
            UOM_Weight: {
                type: GraphQLString
            },
            supplyCondition: {
                type: new GraphQLNonNull(GraphQLString)
            },
            drgIssueDate: {
                type: GraphQLNonNull(DateTime)
            }
        },
        createTable: '../../../../sql/Steel/createPartTable.sql',
        AddData: '../../../../sql/Steel/addPart.sql'
    },
    {
        name: 'SteelType',
        description: 'Steel type definition',
        fields: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            itemCode: {
                type: new GraphQLNonNull(GraphQLID)
            },
            materialGrade: {
                type: new GraphQLNonNull(GraphQLString)
            },
            barDimension: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            barSectionType: {
                type: new GraphQLNonNull(GraphQLString)
            },
            UOM_Dimension: {
                type: GraphQLString
            }
        },
        createTable: '../../../../sql/Steel/createSteelTable.sql',
        AddData: '../../../../sql/Steel/addSteel.sql'
    }
];

module.exports = DataType;