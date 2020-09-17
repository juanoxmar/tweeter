import { schema } from 'nexus';

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.user_name();
    t.model.email();
    t.model.Tweet();
  },
});
