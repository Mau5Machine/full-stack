export const resolvers = {
  Mutation: {
    logout: async (_root, args, { cache }, info) => {
      cache.writeData({ data: { isLoggedIn: false } });
      return null;
    },
    login: async (_root, args, { cache }, info) => {
      cache.writeData({ data: { isLoggedIn: true } });
      return null;
    },
  },
};
