import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import classes from './Content.module.css';
import Home from '../../components/Home/Home';
import TweetMain from '../../components/TweetMain/TweetMain';
import Spacer from '../../components/Spacer/Spacer';
import TweetCard from '../../components/TweetCard/TweetCard';
import { useTweetsQuery } from '../../apollo/generated';
import { userName } from '../../apollo/cache';

type Props = {
  profile?: boolean;
};

function Content(props: Props) {
  const { profile } = props;
  const { data, loading, error, refetch } = useTweetsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  let feed = null;

  if (loading) {
    feed = (
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    feed = (
      <div className={classes.progress}>
        <span>Oops!</span>
        <span>{error.message}</span>
      </div>
    );
  }

  if (data) {
    feed = [...data.tweets]
      .sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
      .map((tweet, index) => {
        const { message, Like, user, id } = tweet;
        return (
          <TweetCard
            tweetKey={id}
            name={user.name}
            userName={user.user_name}
            message={message}
            likes={Like}
            key={index}
          />
        );
      });
    if (profile) {
      feed = feed?.filter((tweet) => tweet.props.userName === userName());
    }
  }

  return (
    <main className={classes.container}>
      <Home header="Home" />
      <div className={classes.main}>
        <TweetMain />
      </div>
      <Spacer />
      {feed}
    </main>
  );
}

export default Content;
