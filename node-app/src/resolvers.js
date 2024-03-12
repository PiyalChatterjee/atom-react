const resolvers = {
  Query: {
    Users: () =>
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => {
          return data.users;
        }),
  },
};

module.exports = resolvers;
