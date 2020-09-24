import { schema } from 'nexus';

schema.objectType({
  name: 'Like',
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.tweet();
    t.model.User();
    t.model.Tweet();
  },
});
