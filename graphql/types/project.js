
const gql = require('graphql');

const ProjectType = new gql.GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {
            type: gql.GraphQLInt,
            description: 'id',
        },
        name: {
            type: gql.GraphQLString,
            description: 'name',
        },
        companyName: {
            type: gql.GraphQLString,
            description: 'companyName',
        },
    }),
});

const ProjectInputType = new gql.GraphQLInputObjectType({
    name: 'ProjectInput',
    fields: () => ({
        name: {
            type: gql.GraphQLString,
            allowNull: false,
            description: 'name',
        },
        companyName: {
            type: gql.GraphQLString,
            allowNull: false,
            description: 'companyName',
        },
    }),
});

module.exports = { ProjectType, ProjectInputType };