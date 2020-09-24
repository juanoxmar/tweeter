import { schema } from 'nexus';

schema.objectType({
  name: 'Trend',
  definition(t) {
    t.string('name');
    t.string('url');
    t.string('tweet_volume');
  },
});
