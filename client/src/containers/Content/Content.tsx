import React, { useEffect } from 'react';

import classes from './Content.module.css';
import Home from '../../components/Home/Home';
import TweetMain from '../../components/TweetMain/TweetMain';
import Spacer from '../../components/Spacer/Spacer';
import TweetCard from '../../components/TweetCard/TweetCard';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer/reducer';
import { tweetFeed } from '../../store/tweet/tweetSlice';

type Props = {
  profile?: string;
};

function Content(props: Props) {
  const { profile } = props;
  const dispatch = useAppDispatch();
  const { allTweets } = useSelector((state: RootState) => state.tweet);
  const { idToken, userName } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(tweetFeed({ idToken: idToken }));
  }, [dispatch, idToken]);

  let feed = null;
  if (allTweets.length > 0) {
    feed = [...allTweets]
      .sort((a, b) => b.time - a.time)
      .map((tweet) => {
        const { message, name, userName, tweetKey, likes } = tweet;
        return (
          <TweetCard
            name={name}
            userName={userName}
            message={message}
            tweetKey={tweetKey}
            likes={likes}
            key={tweetKey}
          />
        );
      });
  }

  if (profile) {
    feed = feed?.filter((tweet) => tweet.props.userName === userName);
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