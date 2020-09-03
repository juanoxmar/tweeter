import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../config/axios';

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
  try {
    dispatch(loadTweetsStart());
    const response = await axios.get<TweetResponse>(
      `/tweets.json?auth=${idToken}`
    );
    if (response.data) {
      const tweets = [];
      for (const key in response.data) {
        tweets.push({
          ...response.data[key],
          tweetKey: key,
        });
      }
      dispatch(loadTweetsSuccess({ tweets: tweets }));
    }
  } catch (error) {
    dispatch(loadTweetsFail(error));
  }
};

export default tweets.reducer;
