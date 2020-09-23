import { gql } from '@apollo/client';

export const TREND = gql`
  query Trend {
    trend {
      name
      url
      tweet_volume
    }
  }
`;

export const TWEETS = gql`
  query tweets {
    tweets {
      id
      message
      Like {
        User {
          user_name
        }
      }
      user {
        name
        user_name
      }
    }
  }
`;
