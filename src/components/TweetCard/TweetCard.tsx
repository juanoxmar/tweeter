import React from 'react';

import avatar from '../../assets/svg/avatar.svg';
import classes from './TweetCard.module.css';

function TweetCard() {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.avatar}>
          <img src={avatar} alt='' />
        </div>
        <div>
          <div>Name and @Handle</div>
          <div>Message</div>
          <div className={classes.icons}>Icons</div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
