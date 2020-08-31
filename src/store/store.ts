import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import reducer, { RootState } from './reducer/reducer';
import { ThunkAction } from 'redux-thunk';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
