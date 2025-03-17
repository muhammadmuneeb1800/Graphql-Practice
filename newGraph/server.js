import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users, quotes } from "./fakeDb.js";

const typeDefs = gql`
  type Query {
    greet: String
    name: String
    fullName: String
    users: [User]
    quotes: [Qoute]
  }

  type User {
    id: ID
    name: String
    email: String
    age: Int
    quotes: [Qoute]
  }

  type Qoute {
    id: ID
    quote: String
    author: String
  }
`;

const resolvers = {
  Query: {
    greet: () => "Hello World",
    name: () => "Muhammad Muneeb",
    fullName: () => "Muhammad Muneeb Mahmood Nadeem",
    users: () => users,
    quotes: () => quotes,
  },
  User: {
    quotes: (user) => quotes.filter((qoute) => qoute.id === user.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
