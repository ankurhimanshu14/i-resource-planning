const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = require('graphql');

const steelType = new GraphQLObjectType({
    name: 'steel',
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            challanNo: { type: new GraphQLNonNull(GraphQLInt) },
            challanDate: { type: new GraphQLNonNull(GraphQLString) },
            grade: { type: new GraphQLNonNull(GraphQLString) },
            section: { type: new GraphQLNonNull(GraphQLString) },
            heatNo: { type: new GraphQLNonNull(GraphQLString) },
            heatCode: { type: GraphQLString },
            jominyValue: { type: GraphQLString },
            approvedComponents: { type: GraphQLString },
            receivedQty: { type: new GraphQLNonNull(GraphQLInt) },
            issuedQty: { type: new GraphQLNonNull(GraphQLInt) },
            availableQty: { type: new GraphQLNonNull(GraphQLInt) },
            uom: {type: new GraphQLNonNull(GraphQLString) }
        }
    }
});

module.exports = steelType;

