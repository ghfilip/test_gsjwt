// app

const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const typeDefs = require('./data/schema');
// const resolvers = require('./data/resolvers');
const jwt = require('express-jwt');
require('dotenv').config();
const schema = require('./graphql/schema');

const port = 3000;
const path = '/graphql';

// create our express app
const app = express();

// auth middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
});

// graphql endpoint
app.use(path, auth);
app.use(path, schema);

// server.applyMiddleware({ app, path });

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}${path}`);
});
