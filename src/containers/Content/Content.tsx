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

function Content() {
  const dispatch = useAppDispatch();
  const { allTweets } = useSelector((state: RootState) => state.tweet);
  const { idToken } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(tweetFeed({ idToken: idToken }));
  }, [dispatch, idToken]);

  let feed = null;
  if (allTweets.length > 0) {
    feed = [...allTweets]
      .sort((a, b) => Date.parse(b.createTime) - Date.parse(a.createTime))
      .map((tweet, index) => {
        const { message, name, userName } = tweet.fields;
        return (
          <TweetCard
            name={name.stringValue}
            userName={userName.stringValue}
            message={message.stringValue}
            key={index}
          />
        );
      });
  }

  return (
    <main className={classes.container}>
      <Home />
      <div className={classes.main}>
        <TweetMain />
      </div>
      <Spacer />
      {feed}
    </main>
  );
}

export default Content;
