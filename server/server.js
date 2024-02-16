const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const {typeDefs , resolvers } = require('./schemas');
const db = require('./config/connection'); 

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log('Connected to MongoDB');

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port http://localhost:${PORT}/`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startServer().catch((error) => {
  console.error('Server startup error:', error);
});


