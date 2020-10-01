module.exports = {
  client: {
    includes: ['./src/apollo/operations/**/*.ts'],
    service: {
      name: 'NexusGraphQL',
      url: 'api/graphql',
    },
  },
};
