import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import classes from './Trend.module.css';
import TrendCard from '../../components/TrendCard/TrendCard';
import { useTrendQuery } from '../../apollo/generated';

function Trend() {
  const { data, loading, error } = useTrendQuery();

  let trending = null;

  if (loading) {
    trending = (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    trending = (
      <div className={classes.spinner}>
        <span>Oops!</span>
        <span>{error.message}</span>
      </div>
    );
  }

  if (data) {
    trending = data.trend?.map((tweet, index) => {
      return (
        <TrendCard
          hashtag={tweet.name!}
          url={tweet.url!}
          volume={+tweet.tweet_volume!}
          key={index}
        />
      );
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.trends}>
        <div className={classes.head}>
          <h3>What's Happening</h3>
        </div>
        {trending}
      </div>
    </div>
  );
}

export default Trend;
