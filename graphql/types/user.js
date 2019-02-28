
const gql = require('graphql');

const UserType = new gql.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: gql.GraphQLInt,
            description: 'id',
        },
        userName: {
            type: gql.GraphQLString,
            description: 'userName',
        },
        email: {
            type: gql.GraphQLString,
            description: 'email',
        },
        firstName: {
            type: gql.GraphQLString,
            description: 'firstName',
        },
        lastName: {
            type: gql.GraphQLString,
            description: 'lastName',
        },
        role: {
            type: gql.GraphQLInt,
            description: 'role',
        }
    }),
});

module.exports = { UserType };