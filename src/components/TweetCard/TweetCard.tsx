import React from 'react';

import avatar from '../../assets/svg/avatar.svg';
import classes from './TweetCard.module.css';

type Props = {
  message: string;
  name: string;
  userName: string;
};

function TweetCard(props: Props) {
  const { message, name, userName } = props;
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div>
          <div className={classes.handles}>
            <div className={classes.name}>{name}</div>{' '}
            <div className={classes.userName}>@{userName}</div>
          </div>
          <div>{message}</div>
          <div className={classes.icons}>---</div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
