import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.ENDPOINT;

const client = new GraphQLClient(endpoint!);

export default client;
