const { GraphQLObjectType, GraphQLList } = require('graphql');
const employeeType = require('./EmployeeType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/Employee/allEmployees.sql')).toString();

const EmployeeQuery = new GraphQLObjectType({
    name: 'EmployeeQuery',
    fields: () => {
        return {
            employees: {
                type: new GraphQLList(employeeType),
                resolve: async () => {
                    const employees = await queryFunction(_statement)
                    if(!employees) {
                        throw new Error('Error while fetching data')
                    }
                    return employees;
                }
            }
        }
    }
});

module.exports = EmployeeQuery;