import React, { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './Trend.module.css';
import { TOKEN } from '../../config/config';
import TrendCard from '../../components/TrendCard/TrendCard';

type twitTrend = {
  name: string;
  tweet_volume: number;
  url: string;
  query: string;
};

function Trend() {
  const [trend, setTrend] = useState<twitTrend[]>();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=2490383',
          {
            headers: {
              Authorization: TOKEN,
            },
          }
        );
        setTrend(
          response.data[0].trends
            .sort(
              (a: twitTrend, b: twitTrend) => b.tweet_volume - a.tweet_volume
            )
            .slice(0, 8)
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  let trending = null;

  if (trend) {
    trending = trend.map((tweet, index) => {
      return (
        <TrendCard
          hashtag={tweet.name}
          url={tweet.url}
          volume={tweet.tweet_volume}
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
