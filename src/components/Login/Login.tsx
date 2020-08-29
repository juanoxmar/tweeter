import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers';

import Logo from '../../assets/images/TwitterLogo.png';
import classes from './Login.module.css';
import schema from './validation';

type FormInputs = {
  userName: string;
  password: string;
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1da1f2',
    },
  },
});

function Login() {
  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: FormInputs) => {
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
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </div>
        <div>Forgot Password? &#183; Sign up for Tweeter</div>
      </div>
    </div>
  );
}

export default Login;
