import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greet: String
    name: String
    fullName: String
    users: [User]
    quotes: [Qoute]
    user(id: ID!): User
    qoute(id: ID!): [Qoute]
  }

  type User {
    id: ID
    name: String
    email: String
    age: Int
    quotes: [Qoute]
  }

  type Qoute {
    by: ID
    quote: String
    author: String
  }

  type Mutation {
    createUser(newUser: UserInput): User
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    age: Int
  }
`;

export default typeDefs;
