import { schema } from 'nexus';

schema.objectType({
  name: 'Tweet',
  definition(t) {
    t.model.id();
    t.model.created();
    t.model.message();
    t.model.User();
  },
});
