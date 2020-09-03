export type AuthSuccessAction = {
  name: string;
  userName: string;
  idToken: string;
  localId: string;
};

export type AuthFailAction = {
  error: Error;
};

export type AuthState = {
  name: string;
  userName: string;
  idToken: string;
  localId: string;
  error: Error | null;
  loading: boolean;
};

export type AuthResponse = {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
};

export type SignupResponse = {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
};

export type AuthType = {
  email: string;
  password: string;
  method: boolean;
  name?: string;
  userName?: string;
};

export type User = {
  name: string;
  email: string;
  userName: string;
  localId: string;
};

export type UsersResponse = { [key: string]: User };
