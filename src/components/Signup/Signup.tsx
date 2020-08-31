import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers';

import Logo from '../../assets/images/TwitterLogo.png';
import classes from './Signup.module.css';
import schema from './validation';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/auth/authSlice';

type FormInputs = {
  name: string;
  email: string;
  userName: string;
  password: string;
  passwordConfirm: string;
};

function Login() {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, errors } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: FormInputs) => {
    dispatch(
      authenticate({
        email: data.email,
        password: data.password,
        method: true,
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
        <h2>Create your account</h2>
        <div className={classes.formBlock}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant='outlined'
              name='name'
              label='Name'
              inputRef={register}
              error={!!errors.name}
              helperText={errors.name?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant='outlined'
              name='email'
              label='Email'
              type='email'
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant='outlined'
              name='userName'
              label='Username'
              inputRef={register}
              error={!!errors.userName}
              helperText={errors.userName?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant='outlined'
              name='password'
              label='Password'
              type='password'
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <TextField
              variant='outlined'
              name='passwordConfirm'
              label='Confirm Password'
              type='password'
              inputRef={register}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              style={{ margin: '8px' }}
              fullWidth
            />
            <button
              type='submit'
              disabled={!formState.isValid}
              className={classes.btn}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
