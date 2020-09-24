import { schema } from 'nexus';
import axios from 'axios';

type twitTrend = {
  name: string;
  tweet_volume: number;
  url: string;
};

schema.queryType({
  definition(t) {
    t.field('trend', {
      list: true,
      type: 'Trend',
      resolve: async () => {
        const response = await axios.get(
          'https://api.twitter.com/1.1/trends/place.json?id=2490383',
          {
            headers: {
              Authorization: process.env.TRENDTOKEN!,
            },
          }
        );
        return response.data[0].trends
          .sort((a: twitTrend, b: twitTrend) => b.tweet_volume - a.tweet_volume)
          .slice(0, 8);
      },
    });
    t.crud.user();
    t.crud.users();
    t.crud.tweet();
    t.crud.tweets();
    t.crud.like();
  },
});
