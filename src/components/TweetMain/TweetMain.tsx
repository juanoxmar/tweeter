import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import classes from './TweetMain.module.css';
import avatar from '../../assets/svg/avatar.svg';
import schema from './validation';

type Inputs = {
  tweet: string;
};

function TweetMain() {
  const { register, handleSubmit, formState, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>
          <img src={avatar} alt='' />
        </div>
        <div className={classes.content}>
          <form onSubmit={handleSubmit(onSubmit)} action=''>
            <div>
              <textarea
                ref={register}
                name='tweet'
                id='tweet'
                rows={3}
                placeholder='Whats happening?'
              />
            </div>
            <div className={classes.btnRow}>
              <div>- - -</div>
              <button
                type='submit'
                disabled={!formState.isValid}
                className={classes.btn}
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TweetMain;
