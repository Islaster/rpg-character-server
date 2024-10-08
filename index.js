const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typeDefs');
const characterResolvers = require('./resolvers/characterResolvers');

// Create the Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers: characterResolvers });

// Launch the server
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
