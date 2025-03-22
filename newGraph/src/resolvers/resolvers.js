import { users, quotes } from "../database/fakeDb.js";

const resolvers = {
  Query: {
    greet: () => "Hello World",
    name: () => "Muhammad Muneeb",
    fullName: () => "Muhammad Muneeb Mahmood Nadeem",
    users: () => users,
    quotes: () => quotes,
    user: (_, { id }) => users.find((user) => user.id.toString() === id),
    qoute: (_, { id }) => quotes.filter((qoute) => qoute.by.toString() === id),
  },
  User: {
    quotes: (user) => quotes.filter((qoute) => qoute.by === user.id),
  },
  Mutation: {
    createUser(_, { newUser }) {
      const neUser = {
        id: Math.random().toString(36).slice(2, 20),
        ...newUser,
        name: `${newUser.firstName}${newUser.lastName}`,
        email: `${newUser.firstName}.${newUser.lastName}@example.com`,
        age: Math.floor(Math.random() * 100) + 18,
      };
      users.push(neUser);
      return neUser;
    },
    signinUser(_, { user }) {
      const findUser = users.find((u) => u.email === user.email);
      return findUser;
    },
  },
};

export default resolvers;
