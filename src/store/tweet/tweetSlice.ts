import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppThunk } from '../store';
import {
  TweetState,
  TweetResponse,
  TweetFeed,
  TweetSuccessAction,
} from './tweetTypes';

const initialState: TweetState = {
  myTweets: [],
  allTweets: [],
  error: null,
  loading: false,
};

const tweets = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    loadTweetsStart(state) {
      state.loading = true;
      state.error = null;
    },
    loadTweetsSuccess(state, action: PayloadAction<TweetSuccessAction>) {
      const { tweets } = action.payload;
      state.allTweets = tweets;
      state.loading = false;
    },
    loadTweetsFail(state, action) {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
  },
});

export const {
  loadTweetsFail,
  loadTweetsStart,
  loadTweetsSuccess,
} = tweets.actions;

export const tweetFeed = (feed: TweetFeed): AppThunk => async (dispatch) => {
  const { idToken } = feed;
  const url =
    'https://firestore.googleapis.com/v1/projects/tweeter-ab37d/databases/(default)/documents/tweets';
  try {
    dispatch(loadTweetsStart());
    const response = await axios.get<TweetResponse>(url, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    dispatch(loadTweetsSuccess({ tweets: response.data.documents }));
  } catch (error) {
    dispatch(loadTweetsFail(error));
  }
};

export default tweets.reducer;
