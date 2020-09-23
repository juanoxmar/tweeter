import { gql } from '@apollo/client';

gql`
  query Trend {
    trend {
      name
      url
      tweet_volume
    }
  }
`;

gql`
  query tweets {
    tweets {
      id
      created
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
