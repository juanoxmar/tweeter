import React from 'react';

import classes from './TweetButton.module.css';
import feather from '../../assets/svg/feather.svg';

type Props = {
  clicked: () => void;
};

function TweetButton(props: Props) {
  const { clicked } = props;
  return (
    <div className={classes.btn} onClick={clicked}>
      <span>Tweet</span>
      <div className={classes.feather}>
        <img src={feather} alt="" />
      </div>
    </div>
  );
}

export default TweetButton;
