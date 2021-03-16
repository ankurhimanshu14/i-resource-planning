const { GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');
const queryFunction = require('../../dBConfig/queryFunction');
const SteelDescriptionType = require('./SteelDescriptionType');
const SteelGradeEnumType = require('./SteelGradeEnumType');
const SteelSectionEnumType = require('./SteelSectionEnumType');
const fs = require('fs');
const path = require('path');

const AddSteelDescription = {
    name: 'SteelDescription',
    
    type: SteelDescriptionType,
    
    args: {
        grade: {
            type: new GraphQLNonNull(SteelGradeEnumType)
        },
        barDimension: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        barSection: {
            type: new GraphQLNonNull(SteelSectionEnumType)
        },
        barDimension_UOM: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    
    resolve: async (parentValue, args, context, info) => {

        const _statement1 = fs.readFileSync(path.join(__dirname + '/../../sql/SteelsDescription/createSteelDescTable.sql')).toString();
        const createTable = await queryFunction(_statement1);
        if(!createTable) {
            throw new Error('Error in creating table');
        }
        const _args = Object.values(args);
        const _statement2 = fs.readFileSync(path.join(__dirname + '/../../sql/SteelsDescription/addSteelDesc.sql')).toString();
        
        const newSteelDescription = queryFunction(_statement2, _args);
        
        if(!newSteelDescription) {
            throw new Error('Error in fetching data');
        }
        return newSteelDescription;
    }
};

module.exports = AddSteelDescription;