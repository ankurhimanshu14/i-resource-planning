const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql');
const userType = require('../Admin/UserType');
const DateTime = require('../Date/DateTimeType');

const employeeType = new GraphQLObjectType({
    name: 'Employee',
    description: 'Employee type definition',
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            employeeId: { type: new GraphQLList(employeeType) },
            firstName: { type: new GraphQLNonNull(GraphQLString) },
            middleNme: { type: GraphQLString },
            lastName: { type: new GraphQLNonNull(GraphQLString) },
            phone: { Type: GraphQLString },
            personalEmail: { type: GraphQLString },
            // createdBy: { type: new GraphQLNonNull(userType) },
            createdAt: { type: new GraphQLNonNull(DateTime) },
            updatedBy: { type: userType },
            updatedAt: { type: DateTime }
        }
    }
});

module.exports = employeeType;