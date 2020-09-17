import { use, log, settings } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';

use(
  prisma({
    features: {
      crud: true,
    },
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
