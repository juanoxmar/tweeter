import React from 'react';

import classes from './TweetButton.module.css';
import feather from '../../assets/svg/feather.svg';

type Props = {
  onClick: () => void;
};

function TweetButton(props: Props) {
  const { onClick } = props;
  return (
    <div className={classes.btn} onClick={onClick}>
      <span>Tweet</span>
      <div className={classes.feather}>
        <img src={feather} alt='' />
      </div>
    </div>
  );
}

export default TweetButton;
