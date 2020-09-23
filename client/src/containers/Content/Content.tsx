import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import classes from './Content.module.css';
import Home from '../../components/Home/Home';
import TweetMain from '../../components/TweetMain/TweetMain';
import Spacer from '../../components/Spacer/Spacer';
import TweetCard from '../../components/TweetCard/TweetCard';

type Props = {
  profile?: string;
};

type TweetResponse = {
  tweets: TweetType[];
};

type TweetType = {
  id: string;
  message: string;
  Like: { User: { user_name: string } }[];
  user: { name: string; user_name: string };
};

function Content(props: Props) {
  const { profile } = props;
  const [allTweets, setAllTweets] = useState<TweetType[]>([]);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       client.setHeader('Authorization', `Bearer ${token}`);
  //       const response: TweetResponse = await client.request(TWEETS);
  //       let feed = response.tweets;
  //       if (profile) {
  //         feed = response.tweets.filter(
  //           (tweet) => tweet.user.user_name === userName
  //         );
  //       }
  //       setAllTweets(() => feed);
  //     } catch (error) {
  //       console.error(error.response);
  //     }
  //   })();
  // }, [token, profile, userName]);

  let feed: JSX.Element | JSX.Element[] = (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
  if (allTweets.length > 0) {
    feed = [...allTweets].reverse().map((tweet, index) => {
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
  }

  return (
    <main className={classes.container}>
      {profile ? null : <Home />}
      <div className={classes.main}>
        <TweetMain />
      </div>
      <Spacer />
      {feed}
    </main>
  );
}

export default Content;
