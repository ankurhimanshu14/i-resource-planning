const { GraphQLNonNull, GraphQLString } = require('graphql');
const employeeType = require('./EmployeeType');
const queryFunction = require('../../dBConfig/queryFunction');
const path = require('path');
const fs = require('fs');

const _statement1 = fs.readFileSync(path.join(__dirname + '/../../sql/Employee/createEmployeeTable.sql')).toString();
const _statement2 = fs.readFileSync(path.join(__dirname + '/../../sql/Employee/addEmployee.sql')).toString();

const addEmployee = {
    name: 'Employee',
    type: employeeType,
    args: {
        fullName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, args) => {

        const createdTable = await queryFunction(_statement1);
        if(!createdTable) {
            throw new Error('Error in creating table');
        }
        
        const _args = Object.values(args);

        const newEmployee = await queryFunction(_statement2, _args);
        if(!newEmployee) {
            throw new Error('Error in adding a new employee');
        }
        return newEmployee;
    }
};

module.exports = addEmployee;