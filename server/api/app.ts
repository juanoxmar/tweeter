import { use, log, settings } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
import { auth } from 'nexus-plugin-jwt-auth';
import dotenv from 'dotenv';

dotenv.config();

use(
  prisma({
    features: {
      crud: true,
    },
  })
);

const protectedPaths = ['Query.user'];

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
