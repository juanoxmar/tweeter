import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppThunk } from '../store';
import { AuthType } from '../../components/Login/Login';
import {
  AuthState,
  AuthSuccessAction,
  AuthFailAction,
  authResponse,
} from './authTypes';
import { AUTHKEY } from '../../config/config';

const initialState: AuthState = {
  idToken: '',
  localId: '',
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
      const { idToken, localId } = action.payload;
      state.idToken = idToken;
      state.localId = localId;
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
  const { email, password, method } = auth;
  try {
    dispatch(authStart());
    if (method) {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTHKEY}`;
      const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      dispatch(
        authSuccess({
          idToken: response.data.idToken,
          localId: response.data.localId,
        })
      );
      console.log(response);
    } else {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTHKEY}`;
      const response = await axios.post<authResponse>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      dispatch(
        authSuccess({
          idToken: response.data.idToken,
          localId: response.data.localId,
        })
      );
      console.log(response);
    }
  } catch (error) {
    dispatch(authFail({ error: error }));
    console.error(error);
  }
};

export const { authStart, authFail, authLogout, authSuccess } = auth.actions;
export default auth.reducer;
