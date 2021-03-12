const graphql = require('graphql');

const steelType = new graphql.GraphQLObjectType({
    name: 'Steel',
    fields: () => {
        return {
            id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
            challanNo: { type: graphql.GraphQLInt },
            challanDate: { type: graphql.GraphQLString },
            grade: { type: graphql.GraphQLString },
            section: { type: graphql.GraphQLString },
            heatNo: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
            heatCode: { type: graphql.GraphQLString },
            approvedComponents: { type: [graphql.GraphQLString] },
            receivedQty: { type: graphql.GraphQLInt },
            releasecQty: { type: graphql.GraphQLInt },
            availableQty: { type: graphql.GraphQLInt },
            uom: { type: graphql.GraphQLString }
        };
    }
});

module.exports = steelType;