import React, { useState } from 'react';

import classes from './TweetModal.module.css';
import TweetMain from '../TweetMain/TweetMain';
import Backdrop from './Backdrop/Backdrop';
import TweetButton from '../TweetButton/TweetButton';

function TweetModal() {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  let tweet: JSX.Element | null = null!;
  if (show) {
    tweet = (
      <div className={classes.modal}>
        <div className={classes.close} onClick={clickHandler}>
          X
        </div>
        <div className={classes.tweet}>
          <TweetMain clicked={clickHandler} />
        </div>
      </div>
    );
  }

  return (
    <>
      <Backdrop show={show} clicked={clickHandler} />
      {tweet}
      <TweetButton clicked={clickHandler} />
    </>
  );
}

export default TweetModal;
