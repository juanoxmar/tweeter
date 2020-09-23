import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers';
import { Redirect, NavLink } from 'react-router-dom';
import { makeVar, useReactiveVar } from '@apollo/client';

import Logo from '../../assets/images/TwitterLogo.png';
import classes from './Login.module.css';
import schema from './validation';
import { useLoginMutation } from '../../apollo/generated';

type FormInputs = {
  email: string;
  password: string;
};

function Login() {
  const token = makeVar('');
  useReactiveVar(token);
  const [loginMutation, { data, error }] = useLoginMutation();

  let authRedirect = null;
  if (window.localStorage.getItem('token')) {
    authRedirect = <Redirect to="/tweeter" />;
  }

  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (inputs: FormInputs) => {
    await loginMutation({
      variables: {
        email: inputs.email,
        password: inputs.password,
      },
    });
    if (data?.login?.token) {
      window.localStorage.setItem('token', data?.login?.token);
      token(data?.login?.token);
    }
  };

  let errorMessage = null;

  if (error) {
    errorMessage = 'Invalid email or password!';
  }

  return (
    <div className={classes.container}>
      {authRedirect}
      <div className={classes.innerContainer}>
        <div>
          <img src={Logo} alt="Tweeter" />
        </div>
        <h2>Log in to Tweeter</h2>
        <div className={classes.formBlock}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              name="email"
              label="Email"
              type="email"
              inputRef={register}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              inputRef={register}
              style={{ margin: '8px' }}
              fullWidth
            />
            <div className={classes.errorMessage}>{errorMessage}</div>
            <button
              type="submit"
              disabled={!formState.isValid}
              className={classes.btn}
            >
              Log in
            </button>
          </form>
        </div>
        <div>
          <NavLink to="/tweeter/signup">Sign up</NavLink> for Tweeter
        </div>
      </div>
    </div>
  );
}

export default Login;
