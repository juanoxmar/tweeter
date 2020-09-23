import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        user_name
        name
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup(
    $name: String!
    $email: String!
    $userName: String!
    $pw: String!
  ) {
    signup(name: $name, email: $email, user_name: $userName, pw: $pw) {
      token
    }
  }
`;

export const TWEET = gql`
  mutation Tweet($message: String!) {
    createOneTweet(data: { message: $message }) {
      id
    }
  }
`;

export const LIKE = gql`
  mutation like($tweetId: String!) {
    createOneLike(data: { Tweet: { connect: { id: $tweetId } } }) {
      Tweet {
        Like {
          User {
            user_name
          }
        }
      }
    }
  }
`;

export const UNLIKE = gql`
  mutation unlike($tweetId: String!) {
    unLike(tweet: $tweetId) {
      Like {
        User {
          user_name
        }
      }
    }
  }
`;
