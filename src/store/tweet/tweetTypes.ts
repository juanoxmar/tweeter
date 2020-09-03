export type TweetState = {
  myTweets: TweetType[];
  allTweets: TweetType[];
  error: Error | null;
  loading: boolean;
};

export type TweetFeed = {
  idToken: string;
};

export type TweetType = {
  localId: string;
  name: string;
  userName: string;
  message: string;
  likes: { [key: string]: string };
  time: number;
  tweetKey: string;
};

export type TweetResponse = { [key: string]: TweetType };

export type TweetSuccessAction = {
  tweets: TweetType[];
};
