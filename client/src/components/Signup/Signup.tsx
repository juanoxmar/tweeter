import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers';
import { Redirect, NavLink } from 'react-router-dom';

import Logo from '../../assets/images/TwitterLogo.png';
import classes from './Signup.module.css';
import schema from './validation';
import { token, userName, name } from '../../apollo/cache';
import { useSignupMutation } from '../../apollo/generated';

type FormInputs = {
  name: string;
  email: string;
  userName: string;
  password: string;
  passwordConfirm: string;
};

function Login() {
  const [signupMutation, { data, error }] = useSignupMutation();

  if (data) {
    token(data.signup?.token!);
  }

  let authRedirect = null;
  if (token()) {
    authRedirect = <Redirect to="/tweeter" />;
  }

  const { register, handleSubmit, formState, errors } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (input: FormInputs) => {
    try {
      await signupMutation({
        variables: {
          email: input.email,
          name: input.name,
          pw: input.password,
          userName: input.userName,
        },
      });
      userName(input.userName);
      name(input.name);
    } catch (error) {
      console.error(error.message);
    }
  };

  let errorMessage = null;

  if (error) {
    if (
      error.graphQLErrors[0].extensions?.exception.meta.target[0] ===
      'user_name'
    ) {
      errorMessage = 'Username is taken!';
    }
    if (
      error.graphQLErrors[0].extensions?.exception.meta.target[0] === 'email'
    ) {
      errorMessage = 'Email is taken!';
    }
  }

  return (
    <div className={classes.container}>
      {authRedirect}
      <div className={classes.innerContainer}>
        <div>
          <img src={Logo} alt="Tweeter" />
        </div>
        <h2>Create your account</h2>
        <div className={classes.formBlock}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              name="name"
              label="Name"
              inputRef={register}
              error={!!errors.name}
              helperText={errors.name?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant="outlined"
              name="email"
              label="Email"
              type="email"
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant="outlined"
              name="userName"
              label="Username"
              inputRef={register}
              error={!!errors.userName}
              helperText={errors.userName?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant="outlined"
              name="passwordConfirm"
              label="Confirm Password"
              type="password"
              inputRef={register}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <div className={classes.errorMessage}>{errorMessage}</div>
            <button
              type="submit"
              disabled={!formState.isValid}
              className={classes.btn}
            >
              Signup
            </button>
          </form>
        </div>
        <div>
          <NavLink to="/tweeter/login">Login</NavLink> to Tweeter
        </div>
      </div>
    </div>
  );
}

export default Login;
