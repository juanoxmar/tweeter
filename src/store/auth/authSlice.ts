import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppThunk } from '../store';
import {
  AuthState,
  AuthSuccessAction,
  AuthFailAction,
  AuthResponse,
  AuthType,
  SignupResponse,
  UsersResponse,
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
      const response = await axios.post<SignupResponse>(url, {
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
        const userUrl =
          'https://firestore.googleapis.com/v1/projects/tweeter-ab37d/databases/(default)/documents/users';
        await axios.post(
          userUrl,
          {
            fields: {
              name: { stringValue: name },
              email: { stringValue: email },
              userName: { stringValue: userName },
              localId: { stringValue: response.data.localId },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        );
      }
      console.log(response);
    } else {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTHKEY}`;
      const response = await axios.post<AuthResponse>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      });
      const users = await axios.get<UsersResponse>(
        'https://firestore.googleapis.com/v1/projects/tweeter-ab37d/databases/(default)/documents/users'
      );
      const findUser = users.data.documents.filter(
        (profile) =>
          profile.fields.localId.stringValue === response.data.localId
      )[0];
      console.log(findUser);
      dispatch(
        authSuccess({
          name: findUser.fields.name.stringValue,
          userName: findUser.fields.userName.stringValue,
          idToken: response.data.idToken,
          localId: response.data.localId,
        })
      );
    }
  } catch (error) {
    dispatch(authFail({ error: error }));
    console.error(error);
  }
};

export const { authStart, authFail, authLogout, authSuccess } = auth.actions;
export default auth.reducer;
