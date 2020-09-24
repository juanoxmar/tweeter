import { schema } from 'nexus';
import { sign } from 'jsonwebtoken';
import argon2 from 'argon2';
import { getUserId } from '../util';

schema.mutationType({
  definition(t) {
    t.field('unLike', {
      type: 'Tweet',
      args: {
        tweet: schema.stringArg({ nullable: false }),
      },
      resolve: async (_root, args, ctx) => {
        const { tweet } = args;
        const userId: string = getUserId(ctx.token).userId;
        try {
          const likeId = await ctx.db.like.findMany({
            where: { user: userId, tweet: tweet },
          });
          await ctx.db.like.delete({ where: { id: likeId[0].id } });
          return ctx.db.tweet.findOne({ where: { id: tweet } });
        } catch (error) {
          return error;
        }
      },
    });

    t.crud.createOneLike({
      computedInputs: {
        User: ({ ctx }) => ({
          connect: {
            user_name: getUserId(ctx.token).userName,
          },
        }),
      },
    });

    t.crud.createOneTweet({
      computedInputs: {
        User_Tweet_userToUser: ({ ctx }) => ({
          connect: {
            user_name: getUserId(ctx.token).userName,
          },
        }),
      },
    });

    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: schema.stringArg({ nullable: false }),
        email: schema.stringArg({ nullable: false }),
        user_name: schema.stringArg({ nullable: false }),
        pw: schema.stringArg({ nullable: false }),
      },
      resolve: async (_root, args, ctx) => {
        const { email, name, pw, user_name } = args;
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
          return {
            token: sign(
              {
                userId: User.id,
                userName: User.user_name,
                exp: Math.round(Date.now() / 1000) + 86400,
              },
              process.env.APP_SECRET!
            ),
            user: User,
          };
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
            token: sign(
              {
                userId: User.id,
                userName: User.user_name,
                exp: Math.round(Date.now() / 1000) + 86400,
              },
              process.env.APP_SECRET!
            ),
            user: User,
          };
        } catch (error) {
          return error;
        }
      },
    });
  },
});
