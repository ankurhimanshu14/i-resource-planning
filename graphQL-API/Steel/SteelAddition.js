const graphql = require('graphql');
const path = require('path')
const steelType = require('./SteelType');
const fs = require('fs');
const queryFunction = require('../../dBConfig/queryFunction');

const _statement = fs.readFileSync(path.join(__dirname + '/../../sql/addSteel.sql')).toString();

const addSteel = {
    type: steelType,
    args: {
        fullName: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        email: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        username: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
        password: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: async (root, args) => {
        const _args = Object.values(args);
        const newUser = await queryFunction(_statement, _args);
        if(!newUser) {
            throw new Error('error');
        }
        return newUser;
    }
};

module.exports = addUser;