const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} = require('graphql');

const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            fullName: { type: GraphQLString },
            email: { type: GraphQLString },
            username: { type: GraphQLString },
            password: { type: GraphQLString },

        }
    }
});

module.exports = userType;

