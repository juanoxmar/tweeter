import { schema } from 'nexus';

schema.queryType({
  definition(t) {
    t.crud.user();
    t.crud.users();
    t.crud.tweet();
    t.crud.tweets();
  },
});
