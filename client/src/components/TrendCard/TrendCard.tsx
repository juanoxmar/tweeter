import React from 'react';
import classes from './TrendCard.module.css';

type Props = {
  hashtag: string;
  url: string;
  volume: number;
};

function TrendCard(props: Props) {
  const { hashtag, url, volume } = props;
  return (
    <div className={classes.container}>
      <a href={url}>{hashtag}</a>
      <span>{volume} Tweets</span>
    </div>
  );
}

export default TrendCard;
