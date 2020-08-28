import React from 'react';

import classes from './Content.module.css';
import Home from '../../components/Home/Home';
import TweetMain from '../../components/TweetMain/TweetMain';
import Spacer from '../../components/Spacer/Spacer';

function Content() {
  return (
    <main className={classes.container}>
      <Home />
      <div className={classes.main}>
        <TweetMain />
      </div>
      <Spacer />
    </main>
  );
}

export default Content;
