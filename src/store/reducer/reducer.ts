import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import tweetReducer from '../tweet/tweetSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  tweet: tweetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
