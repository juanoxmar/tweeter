import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import reducer, { RootState } from './reducer/reducer';
import { ThunkAction } from 'redux-thunk';
import { useDispatch } from 'react-redux';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
