const graphql = require('graphql');

const userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: () => {
        return {
            id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
            fullName: { type: graphql.GraphQLString },
            email: { type: graphql.GraphQLString },
            username: { type: graphql.GraphQLString },
            password: { type: graphql.GraphQLString }
        };
    }
});

module.exports = userType;