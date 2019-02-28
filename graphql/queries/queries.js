
const gql = require('graphql');

// the graphql plain object type
const { UserType } = require('../types/user');
const { ProjectType } = require('../types/project');

// Retrieve data from Models
const userModel = require('../../models/user');
const projectModel = require('../../models/project');

const Query = new gql.GraphQLObjectType({
    name: 'Query',
    fields: {
        profile: {
            type: UserType,
            args: {},
            resolve: async (root, args, context, info) => {
                args.token = context.headers.authorization ?
                    context.headers.authorization.replace('Bearer ', '') : null;

                return userModel.profile(args, context);
            }
        },

        user: {
            type: UserType,
            args: {
                id: {
                    type: gql.GraphQLInt,
                    description: 'user id',
                },
            },
            resolve: async (root, args, context, info) => {
                args.token = context.headers.authorization ?
                    context.headers.authorization.replace('Bearer ', '') : null;

                return userModel.listUser(args, context);
            }
        },

        users: {
            type: new gql.GraphQLList(UserType),
            args: {},
            resolve: async (root, args, context, info) => {
                args.token = context.headers.authorization ?
                    context.headers.authorization.replace('Bearer ', '') : null;

                console.log(args);

                return userModel.listUsers(args, context);
            }
        },

        projects: {
            type: new gql.GraphQLList(ProjectType),
            args: {},
            resolve: async (root, args, context, info) => {
                // args.token = context.headers.authorization ?
                //     context.headers.authorization.replace('Bearer ', '') : null;

                return projectModel.listProjects(args);
            }
        },
    }
});

const Mutation = new gql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: {
            type: UserType,
            args: {
                userName: { type: gql.GraphQLString },
                email: { type: gql.GraphQLString },
                password: { type: gql.GraphQLString },
                firstName: { type: gql.GraphQLString },
                lastName: { type: gql.GraphQLString },
            },

            resolve: async (root, args, context, info) => {
                return userModel.signUp(args);
            },
        },

        login: {
            type: new gql.GraphQLObjectType({
                name: 'login',
                fields: () => ({
                    token: {
                        type: gql.GraphQLString,
                        description: 'token',
                    },
                }),
            }),
            args: {
                userName: { type: gql.GraphQLString },
                password: { type: gql.GraphQLString },
            },
            resolve: async (root, args, context, info) => {
                return userModel.login(args);
            }
        },

        addProject: {
            type: ProjectType,
            args: {
                name: {
                    type: gql.GraphQLString,
                    description: 'Project Name',
                },
                companyName: {
                    type: gql.GraphQLString,
                    description: 'Company Name',
                },
            },
            resolve: async (root, args, context, info) => {
                args.token = context.headers.authorization ?
                    context.headers.authorization.replace('Bearer ', '') : null;

                return projectModel.addProject(args, context);
            }
        },
    }
});

module.exports = { Query, Mutation };