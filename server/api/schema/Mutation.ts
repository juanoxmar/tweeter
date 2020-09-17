import { schema } from 'nexus';
import argon2 from 'argon2';

schema.mutationType({
  definition(t) {
    t.crud.createOneTweet();
    t.crud.createOneUser({
      resolve: async (_root, args, ctx) => {
        const { email, name, pw, user_name } = args.data;
        try {
          const hash = await argon2.hash(pw, {
            type: 2,
          });
          const User = await ctx.db.user.create({
            data: {
              name,
              email,
              user_name,
              pw: hash,
            },
          });
          return User;
        } catch (error) {
          return error;
        }
      },
    });
  },
});
