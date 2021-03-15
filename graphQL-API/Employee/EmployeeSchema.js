const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const EmployeeQuery = require('./EmployeeQuery');
const EmployeeMutation = require('./EmployeeMutation');

const EmployeeSchema = new GraphQLSchema ({
    employeeQuery: EmployeeQuery,
    mutation: new GraphQLObjectType({
        name: 'EmployeeMutation',
        fields: EmployeeMutation
    })
})

module.exports = EmployeeSchema;