const gql = require('graphql');
const graphqlHTTP = require('express-graphql');

const { Query, Mutation } = require('./queries/queries');

const schema = new gql.GraphQLSchema({
    query: Query,
    mutation: Mutation,
});

const gqlSchema = graphqlHTTP({
    schema,
    graphiql: true //Set to false if you don't want graphiql enabled
});

module.exports = gqlSchema;
