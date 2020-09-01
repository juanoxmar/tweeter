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

type User = {
  fields: {
    name: {
      stringValue: string;
    };
    email: {
      stringValue: string;
    };
    userName: {
      stringValue: string;
    };
    localId: {
      stringValue: string;
    };
  };
};

export type UsersResponse = {
  documents: User[];
};
