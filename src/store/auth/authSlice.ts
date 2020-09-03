import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../config/axios';
import Axios from 'axios';

import { AppThunk } from '../store';
import {
  AuthState,
  AuthSuccessAction,
  AuthFailAction,
  AuthResponse,
  AuthType,
  SignupResponse,
  UsersResponse,
  User,
} from './authTypes';
import { AUTHKEY } from '../../config/config';

const initialState: AuthState = {
  name: '',
  userName: '',
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
      const { name, userName, idToken, localId } = action.payload;
      state.name = name;
      state.userName = userName;
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
  const { email, password, method, name, userName } = auth;
  try {
    dispatch(authStart());
    if (method) {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTHKEY}`;
      const response = await Axios.post<SignupResponse>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      const { idToken, localId } = response.data;
      dispatch(
        authSuccess({
          name: name!,
          userName: userName!,
          idToken: idToken,
          localId: localId,
        })
      );
      if (response.status === 200) {
        await axios.post(`/users.json?auth=${idToken}`, {
          name: name,
          email: email,
          userName: userName,
          localId: response.data.localId,
        });
      }
    } else {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTHKEY}`;
      const response = await axios.post<AuthResponse>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      const { idToken, localId } = response.data;
      const { data } = await axios.get<UsersResponse>(
        `/users.json?auth=${idToken}`
      );

      let findUser: User = null!;
      for (const key in data) {
        if (data[key].localId === localId) {
          findUser = data[key];
        }
      }
      dispatch(
        authSuccess({
          name: findUser.name,
          userName: findUser.userName,
          idToken: idToken,
          localId: localId,
        })
      );
    }
  } catch (error) {
    dispatch(authFail({ error: error.response.data.error }));
  }
};

export const { authStart, authFail, authLogout, authSuccess } = auth.actions;
export default auth.reducer;
