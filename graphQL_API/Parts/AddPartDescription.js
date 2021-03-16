const { GraphQLNonNull, GraphQLString, GraphQLObjectType } = require('graphql');
const queryFunction = require('../../dBConfig/queryFunction');
const PartDescriptionType = require('./PartDescriptionType');
const PartProfileEnumType = require('./PartProfileEnumType');
const fs = require('fs');
const path = require('path');

const AddPartDescription = {
    name: 'PartDescription',
    
    type: PartDescriptionType,
    
    args: {
        number: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        profile: {
            type: new GraphQLNonNull(PartProfileEnumType)
        }
    },
    
    resolve: async (parentValue, args, context, info) => {

        const _statement1 = fs.readFileSync(path.join(__dirname + '/../../sql/PartsDescription/createPartDescTable.sql')).toString();
        const createTable = await queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Error in creating table');
        }
        const _args = Object.values(args);
        const _statement2 = fs.readFileSync(path.join(__dirname + '/../../sql/PartsDescription/addPartDesc.sql')).toString();
        
        const newPartDescription = queryFunction(_statement2, _args);
        
        if(!newPartDescription) {
            throw new Error('Error in fetching data');
        }
        return newPartDescription;
    }
};

module.exports = AddPartDescription;