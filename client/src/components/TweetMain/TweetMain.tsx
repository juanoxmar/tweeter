import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import classes from './TweetMain.module.css';
import avatar from '../../assets/svg/avatar.svg';
import schema from './validation';
import { useTweetMutation } from '../../apollo/generated';
import { gql } from '@apollo/client';

type Inputs = {
  tweet: string;
};

type Props = {
  clicked?: () => void;
};

function TweetMain(props: Props) {
  const { clicked } = props;

  const [tweetMutation] = useTweetMutation({
    update(cache, { data: TweetMutation }) {
      cache.modify({
        fields: {
          tweets(existingTweets) {
            const newTweetRef = cache.writeFragment({
              data: TweetMutation?.createOneTweet,
              fragment: gql`
                fragment NewTweet on Tweet {
                  id
                  message
                  Like {
                    User {
                      user_name
                    }
                  }
                  user {
                    name
                    user_name
                  }
                }
              `,
            });
            return [...existingTweets, newTweetRef];
          },
        },
      });
    },
  });

  const { register, handleSubmit, formState, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (input: Inputs) => {
    try {
      await tweetMutation({
        variables: {
          message: input.tweet,
        },
      });
      reset();
    } catch (error) {
      console.error(error.message);
    }
    if (clicked) {
      clicked();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div className={classes.content}>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
              <textarea
                ref={register}
                name="tweet"
                id="tweet"
                rows={3}
                placeholder="Whats happening?"
              />
            </div>
            <div className={classes.btnRow}>
              <div></div>
              <button
                type="submit"
                disabled={!formState.isValid}
                className={classes.btn}
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TweetMain;
