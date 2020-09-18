import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers';
import { Redirect, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../assets/images/TwitterLogo.png';
import classes from './Login.module.css';
import schema from './validation';
import { authenticate } from '../../store/auth/authSlice';
import { useAppDispatch } from '../../store/store';
import { RootState } from '../../store/reducer/reducer';

type FormInputs = {
  email: string;
  password: string;
};

function Login() {
  const dispatch = useAppDispatch();
  const { token, error } = useSelector((state: RootState) => state.auth);

  let authRedirect = null;
  if (token !== '') {
    authRedirect = <Redirect to="/tweeter" />;
  }

  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: FormInputs) => {
    dispatch(
      authenticate({
        email: data.email,
        password: data.password,
        method: false,
      })
    );
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
