import { schema } from 'nexus';
import { sign } from 'jsonwebtoken';
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

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: schema.stringArg({ nullable: false }),
        password: schema.stringArg({ nullable: false }),
      },
      resolve: async (_root, args, ctx) => {
        const { email, password } = args;
        try {
          const User = await ctx.db.user.findOne({ where: { email } });
          if (!User) {
            throw new Error('No user found');
          }
          const pwValid = await argon2.verify(User.pw, password);
          if (!pwValid) {
            throw new Error('Invalid Password');
          }
          return {
            token: sign({ userId: User.id }, process.env.APP_SECRET!),
            user: User,
          };
        } catch (error) {
          return error;
        }
      },
    });
  },
});
