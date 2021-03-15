const { GraphQLString, GraphQLInputObjectType, GraphQLNonNull } = require('graphql');
const UserRole = require('./UserRoleEnumType');

const CreateUserInputType = new GraphQLInputObjectType({
    name: 'CreateUserInput',
    description: 'Input payload for creating user',
    fields: () => {
        return {
            
            officialEmail: {
                type: GraphQLString
            },
            username: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },
            role: {
                type: UserRole,
                defaultValue: UserRole.getValue('USER').value
            }
        }
    }
});

module.exports = CreateUserInputType;