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
  fields: {
    likes: { arrayValue: {} };
    message: { stringValue: string };
    id: { stringValue: string };
    name: { stringValue: string };
    userName: { stringValue: string };
  };
  createTime: string;
  updateTime: string;
};

export type TweetResponse = {
  documents: TweetType[];
};

export type TweetSuccessAction = {
  tweets: TweetType[];
};
