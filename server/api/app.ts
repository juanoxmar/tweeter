import { use, log, settings, server } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
import { auth } from 'nexus-plugin-jwt-auth';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

server.express.use(cors());

use(
  prisma({
    features: {
      crud: true,
    },
  })
);

const protectedPaths = [
  'Mutation.createOneTweet',
  'Mutation.createOneLike',
  'Mutation.unLike',
  'Query.users',
  'Query.user',
  'Query.tweet',
  'Query.tweets',
  'Query.like',
];

use(
  auth({
    appSecret: process.env.APP_SECRET,
    protectedPaths,
  })
);

settings.change({
  server: {
    startMessage: (info) => {
      settings.original.server.startMessage(info);
      log.warn('Query Away!');
    },
  },
});
