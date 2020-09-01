export type AuthSuccessAction = {
  idToken: string;
  localId: string;
};

export type AuthFailAction = {
  error: Error;
};

export type AuthState = {
  idToken: string;
  localId: string;
  error: Error | null;
  loading: boolean;
};

export type authResponse = {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
};
