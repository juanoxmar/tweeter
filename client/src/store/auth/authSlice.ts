import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { request } from 'graphql-request';

import { AppThunk } from '../store';
import {
  AuthState,
  AuthSuccessAction,
  AuthFailAction,
  LoginResponse,
  AuthType,
  SignupResponse,
} from './authTypes';
import { LOGIN, SIGNUP } from '../../graphql/queries';

const endpoint = 'http://localhost:4000/graphql';

const initialState: AuthState = {
  name: '',
  userName: '',
  token: '',
  error: null,
  loading: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action: PayloadAction<AuthSuccessAction>) {
      const { name, userName, token } = action.payload;
      state.name = name;
      state.userName = userName;
      state.token = token;
      state.loading = false;
    },
    authFail(state, action: PayloadAction<AuthFailAction>) {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
    authLogout(state) {
      state = initialState;
    },
  },
});

export const authenticate = (auth: AuthType): AppThunk => async (dispatch) => {
  const { email, password, method, name, userName } = auth;
  try {
    dispatch(authStart());
    if (method) {
      const response: SignupResponse = await request(endpoint, SIGNUP, {
        name,
        email,
        userName,
        pw: password,
      });
      console.log(response);
      const { token } = response.signup;
      dispatch(
        authSuccess({
          name: name!,
          userName: userName!,
          token: token,
        })
      );
    } else {
      const response: LoginResponse = await request(endpoint, LOGIN, {
        email,
        password,
      });
      const { token, user } = response.login;
      dispatch(
        authSuccess({
          name: user.name,
          userName: user.user_name,
          token: token,
        })
      );
    }
  } catch (error) {
    dispatch(authFail({ error: error.response.errors[0] }));
  }
};

export const { authStart, authFail, authLogout, authSuccess } = auth.actions;
export default auth.reducer;
