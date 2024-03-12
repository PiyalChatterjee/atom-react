const http = require("http");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { WebSocketServer } = require("ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { useServer } = require("graphql-ws/lib/use/ws");

const dotenv = require("dotenv");
const cors = require("cors");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

dotenv.config();
const app = express();
app.use(cors());

const PORT = 8080;
const httpServer = http.createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

const main = async () => {
  useServer({ schema }, wsServer);
  await server.start();
  server.applyMiddleware({ app });
  httpServer.listen({ port: PORT }, () => {
    console.log(
      `server has started at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};
main();
