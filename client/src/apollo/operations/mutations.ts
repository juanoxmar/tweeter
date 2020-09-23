import { gql } from '@apollo/client';

gql`
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

gql`
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

gql`
  mutation Tweet($message: String!) {
    createOneTweet(data: { message: $message }) {
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

gql`
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

gql`
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
