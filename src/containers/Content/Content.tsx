import React from 'react';

import classes from './Content.module.css';
import Home from '../../components/Home/Home';
import TweetMain from '../../components/TweetMain/TweetMain';
import Spacer from '../../components/Spacer/Spacer';
import TweetCard from '../../components/TweetCard/TweetCard';

function Content() {
  return (
    <main className={classes.container}>
      <Home />
      <div className={classes.main}>
        <TweetMain />
      </div>
      <Spacer />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </main>
  );
}

export default Content;
