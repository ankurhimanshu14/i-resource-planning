const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql');
const employeeType = require('../Employee/EmployeeType');
const UserRoleEnum = require('./UserRoleEnumType');
const DateTime = require('../Date/DateTimeType');

const userType = new GraphQLObjectType({
    name: 'User',
    description: 'User type definition',
    fields: () => {
        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            employeeId: { type: new GraphQLList(employeeType)},
            officialEmail: { type: GraphQLString },
            username: { type: GraphQLString },
            password: { type: GraphQLString },
            role: { type: new GraphQLNonNull(UserRoleEnum) },
            createdBy: { type: new GraphQLNonNull(userType) },
            createdAt: { type: new GraphQLNonNull(DateTime) },
            updatedBy: { type: userType },
            updatedAt: { type: DateTime }
        }
    }
});

module.exports = userType;

//https://github.com/atherosai/graphql-gateway-apollo-express/blob/master/server/schema/users/CreateUserPayload.ts

