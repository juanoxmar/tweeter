module.exports = {
  client: {
    includes: ['./src/apollo/operations/**/*.ts'],
    service: {
      name: 'NexusGraphQL',
      url: 'http://localhost:4000/graphql',
    },
  },
};
