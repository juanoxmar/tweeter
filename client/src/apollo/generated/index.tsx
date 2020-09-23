import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  trend?: Maybe<Array<Trend>>;
  user?: Maybe<User>;
  users: Array<User>;
  tweet?: Maybe<Tweet>;
  tweets: Array<Tweet>;
  like?: Maybe<Like>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QueryTweetArgs = {
  where: TweetWhereUniqueInput;
};


export type QueryTweetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TweetWhereUniqueInput>;
  after?: Maybe<TweetWhereUniqueInput>;
};


export type QueryLikeArgs = {
  where: LikeWhereUniqueInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  user_name: Scalars['String'];
  email: Scalars['String'];
  Like: Array<Like>;
};


export type UserLikeArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<LikeWhereUniqueInput>;
  after?: Maybe<LikeWhereUniqueInput>;
};

export type LikeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['String'];
  user: Scalars['String'];
  tweet: Scalars['String'];
  User: User;
  Tweet: Tweet;
};

export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  message: Scalars['String'];
  Like: Array<Like>;
  user: User;
};


export type TweetLikeArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<LikeWhereUniqueInput>;
  after?: Maybe<LikeWhereUniqueInput>;
};


export type Trend = {
  __typename?: 'Trend';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  tweet_volume?: Maybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
};

export type TweetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  unLike?: Maybe<Tweet>;
  deleteOneLike?: Maybe<Like>;
  createOneLike: Like;
  createOneTweet: Tweet;
  signup?: Maybe<AuthPayload>;
  login?: Maybe<AuthPayload>;
};


export type MutationUnLikeArgs = {
  tweet: Scalars['String'];
};


export type MutationDeleteOneLikeArgs = {
  where: LikeWhereUniqueInput;
};


export type MutationCreateOneLikeArgs = {
  data: LikeCreateInput;
};


export type MutationCreateOneTweetArgs = {
  data: TweetCreateInput;
};


export type MutationSignupArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  user_name: Scalars['String'];
  pw: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LikeCreateInput = {
  id?: Maybe<Scalars['String']>;
  Tweet: TweetCreateOneWithoutLikeInput;
};

export type TweetCreateOneWithoutLikeInput = {
  create?: Maybe<TweetCreateWithoutLikeInput>;
  connect?: Maybe<TweetWhereUniqueInput>;
};

export type TweetCreateWithoutLikeInput = {
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  message: Scalars['String'];
  User_Tweet_userToUser: UserCreateOneWithoutTweet_Tweet_UserToUserInput;
};

export type UserCreateOneWithoutTweet_Tweet_UserToUserInput = {
  create?: Maybe<UserCreateWithoutTweet_Tweet_UserToUserInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutTweet_Tweet_UserToUserInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  email: Scalars['String'];
  user_name: Scalars['String'];
  pw: Scalars['String'];
  Like?: Maybe<LikeCreateManyWithoutUserInput>;
};

export type LikeCreateManyWithoutUserInput = {
  create?: Maybe<Array<LikeCreateWithoutUserInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  Tweet: TweetCreateOneWithoutLikeInput;
};

export type TweetCreateInput = {
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  message: Scalars['String'];
  Like?: Maybe<LikeCreateManyWithoutTweetInput>;
};

export type LikeCreateManyWithoutTweetInput = {
  create?: Maybe<Array<LikeCreateWithoutTweetInput>>;
  connect?: Maybe<Array<LikeWhereUniqueInput>>;
};

export type LikeCreateWithoutTweetInput = {
  id?: Maybe<Scalars['String']>;
  User: UserCreateOneWithoutLikeInput;
};

export type UserCreateOneWithoutLikeInput = {
  create?: Maybe<UserCreateWithoutLikeInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutLikeInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  email: Scalars['String'];
  user_name: Scalars['String'];
  pw: Scalars['String'];
  Tweet_Tweet_userToUser?: Maybe<TweetCreateManyWithoutUser_Tweet_UserToUserInput>;
};

export type TweetCreateManyWithoutUser_Tweet_UserToUserInput = {
  create?: Maybe<Array<TweetCreateWithoutUser_Tweet_UserToUserInput>>;
  connect?: Maybe<Array<TweetWhereUniqueInput>>;
};

export type TweetCreateWithoutUser_Tweet_UserToUserInput = {
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  message: Scalars['String'];
  Like?: Maybe<LikeCreateManyWithoutTweetInput>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'user_name' | 'name'>
    )> }
  )> }
);

export type SignupMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  userName: Scalars['String'];
  pw: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  )> }
);

export type TweetMutationVariables = Exact<{
  message: Scalars['String'];
}>;


export type TweetMutation = (
  { __typename?: 'Mutation' }
  & { createOneTweet: (
    { __typename?: 'Tweet' }
    & Pick<Tweet, 'id' | 'message'>
    & { Like: Array<(
      { __typename?: 'Like' }
      & { User: (
        { __typename?: 'User' }
        & Pick<User, 'user_name'>
      ) }
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'user_name'>
    ) }
  ) }
);

export type LikeMutationVariables = Exact<{
  tweetId: Scalars['String'];
}>;


export type LikeMutation = (
  { __typename?: 'Mutation' }
  & { createOneLike: (
    { __typename?: 'Like' }
    & { Tweet: (
      { __typename?: 'Tweet' }
      & { Like: Array<(
        { __typename?: 'Like' }
        & { User: (
          { __typename?: 'User' }
          & Pick<User, 'user_name'>
        ) }
      )> }
    ) }
  ) }
);

export type UnlikeMutationVariables = Exact<{
  tweetId: Scalars['String'];
}>;


export type UnlikeMutation = (
  { __typename?: 'Mutation' }
  & { unLike?: Maybe<(
    { __typename?: 'Tweet' }
    & { Like: Array<(
      { __typename?: 'Like' }
      & { User: (
        { __typename?: 'User' }
        & Pick<User, 'user_name'>
      ) }
    )> }
  )> }
);

export type TrendQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendQuery = (
  { __typename?: 'Query' }
  & { trend?: Maybe<Array<(
    { __typename?: 'Trend' }
    & Pick<Trend, 'name' | 'url' | 'tweet_volume'>
  )>> }
);

export type TweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type TweetsQuery = (
  { __typename?: 'Query' }
  & { tweets: Array<(
    { __typename?: 'Tweet' }
    & Pick<Tweet, 'id' | 'created' | 'message'>
    & { Like: Array<(
      { __typename?: 'Like' }
      & { User: (
        { __typename?: 'User' }
        & Pick<User, 'user_name'>
      ) }
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'user_name'>
    ) }
  )> }
);


export const LoginDocument = gql`
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($name: String!, $email: String!, $userName: String!, $pw: String!) {
  signup(name: $name, email: $email, user_name: $userName, pw: $pw) {
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      userName: // value for 'userName'
 *      pw: // value for 'pw'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const TweetDocument = gql`
    mutation Tweet($message: String!) {
  createOneTweet(data: {message: $message}) {
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
export type TweetMutationFn = Apollo.MutationFunction<TweetMutation, TweetMutationVariables>;

/**
 * __useTweetMutation__
 *
 * To run a mutation, you first call `useTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tweetMutation, { data, loading, error }] = useTweetMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useTweetMutation(baseOptions?: Apollo.MutationHookOptions<TweetMutation, TweetMutationVariables>) {
        return Apollo.useMutation<TweetMutation, TweetMutationVariables>(TweetDocument, baseOptions);
      }
export type TweetMutationHookResult = ReturnType<typeof useTweetMutation>;
export type TweetMutationResult = Apollo.MutationResult<TweetMutation>;
export type TweetMutationOptions = Apollo.BaseMutationOptions<TweetMutation, TweetMutationVariables>;
export const LikeDocument = gql`
    mutation like($tweetId: String!) {
  createOneLike(data: {Tweet: {connect: {id: $tweetId}}}) {
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
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, baseOptions);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const UnlikeDocument = gql`
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
export type UnlikeMutationFn = Apollo.MutationFunction<UnlikeMutation, UnlikeMutationVariables>;

/**
 * __useUnlikeMutation__
 *
 * To run a mutation, you first call `useUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeMutation, { data, loading, error }] = useUnlikeMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useUnlikeMutation(baseOptions?: Apollo.MutationHookOptions<UnlikeMutation, UnlikeMutationVariables>) {
        return Apollo.useMutation<UnlikeMutation, UnlikeMutationVariables>(UnlikeDocument, baseOptions);
      }
export type UnlikeMutationHookResult = ReturnType<typeof useUnlikeMutation>;
export type UnlikeMutationResult = Apollo.MutationResult<UnlikeMutation>;
export type UnlikeMutationOptions = Apollo.BaseMutationOptions<UnlikeMutation, UnlikeMutationVariables>;
export const TrendDocument = gql`
    query Trend {
  trend {
    name
    url
    tweet_volume
  }
}
    `;

/**
 * __useTrendQuery__
 *
 * To run a query within a React component, call `useTrendQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendQuery(baseOptions?: Apollo.QueryHookOptions<TrendQuery, TrendQueryVariables>) {
        return Apollo.useQuery<TrendQuery, TrendQueryVariables>(TrendDocument, baseOptions);
      }
export function useTrendLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendQuery, TrendQueryVariables>) {
          return Apollo.useLazyQuery<TrendQuery, TrendQueryVariables>(TrendDocument, baseOptions);
        }
export type TrendQueryHookResult = ReturnType<typeof useTrendQuery>;
export type TrendLazyQueryHookResult = ReturnType<typeof useTrendLazyQuery>;
export type TrendQueryResult = Apollo.QueryResult<TrendQuery, TrendQueryVariables>;
export function refetchTrendQuery(variables?: TrendQueryVariables) {
      return { query: TrendDocument, variables: variables }
    }
export const TweetsDocument = gql`
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

/**
 * __useTweetsQuery__
 *
 * To run a query within a React component, call `useTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTweetsQuery(baseOptions?: Apollo.QueryHookOptions<TweetsQuery, TweetsQueryVariables>) {
        return Apollo.useQuery<TweetsQuery, TweetsQueryVariables>(TweetsDocument, baseOptions);
      }
export function useTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TweetsQuery, TweetsQueryVariables>) {
          return Apollo.useLazyQuery<TweetsQuery, TweetsQueryVariables>(TweetsDocument, baseOptions);
        }
export type TweetsQueryHookResult = ReturnType<typeof useTweetsQuery>;
export type TweetsLazyQueryHookResult = ReturnType<typeof useTweetsLazyQuery>;
export type TweetsQueryResult = Apollo.QueryResult<TweetsQuery, TweetsQueryVariables>;
export function refetchTweetsQuery(variables?: TweetsQueryVariables) {
      return { query: TweetsDocument, variables: variables }
    }