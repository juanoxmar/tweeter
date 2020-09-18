import { gql } from 'graphql-request';

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
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
  mutation($name: String!, $email: String!, $user_name: String!, $pw: String!) {
    signup(name: $name, email: $email, user_name: $user_name, pw: $pw) {
      token
    }
  }
`;

export const TWEET = gql`
  mutation($message: String!) {
    createOneTweet(data: { message: $message }) {
      id
    }
  }
`;
