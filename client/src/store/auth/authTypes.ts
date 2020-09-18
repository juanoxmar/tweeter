export type AuthSuccessAction = {
  name: string;
  userName: string;
  token: string;
};

export type AuthFailAction = {
  error: Error;
};

export type AuthState = {
  name: string;
  userName: string;
  token: string;
  error: Error | null;
  loading: boolean;
};

export type LoginResponse = {
  login: {
    token: string;
    user: {
      name: string;
      user_name: string;
    };
  };
};

export type SignupResponse = {
  signup: {
    token: string;
  };
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
};
