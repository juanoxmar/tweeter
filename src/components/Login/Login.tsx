import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/TwitterLogo.png';
import classes from './Login.module.css';
import schema from './validation';
import { authenticate } from '../../store/auth/authSlice';

type FormInputs = {
  userName: string;
  password: string;
};

export type AuthType = {
  email: string;
  password: string;
  method: boolean;
};

function Login() {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: FormInputs) => {
    dispatch(
      authenticate({
        email: data.userName,
        password: data.password,
        method: false,
      })
    );
    console.log(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>
          <img src={Logo} alt='Tweeter' />
        </div>
        <h2>Log in to Tweeter</h2>
        <div className={classes.formBlock}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant='outlined'
              name='userName'
              label='Username'
              inputRef={register}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant='outlined'
              name='password'
              label='Password'
              type='password'
              inputRef={register}
              style={{ margin: '8px' }}
              fullWidth
            />
            <button
              type='submit'
              disabled={!formState.isValid}
              className={classes.btn}
            >
              Log in
            </button>
          </form>
        </div>
        <div>Forgot Password? &#183; Sign up for Tweeter</div>
      </div>
    </div>
  );
}

export default Login;
