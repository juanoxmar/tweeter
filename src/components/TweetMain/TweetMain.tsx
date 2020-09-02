import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import axios from 'axios';

import classes from './TweetMain.module.css';
import avatar from '../../assets/svg/avatar.svg';
import schema from './validation';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer/reducer';
import { useAppDispatch } from '../../store/store';
import { tweetFeed } from '../../store/tweet/tweetSlice';

type Inputs = {
  tweet: string;
};

function TweetMain() {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { localId, idToken, name, userName } = useSelector(
    (state: RootState) => state.auth
  );

  const onSubmit = async (data: Inputs) => {
    const url =
      'https://firestore.googleapis.com/v1/projects/tweeter-ab37d/databases/(default)/documents/tweets';
    try {
      await axios.post(
        url,
        {
          fields: {
            localId: { stringValue: localId },
            name: { stringValue: name },
            userName: { stringValue: userName },
            message: { stringValue: data.tweet },
            likes: { arrayValue: { values: [] } },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
    dispatch(tweetFeed({ idToken: idToken }));
    reset();
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div className={classes.content}>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
              <textarea
                ref={register}
                name="tweet"
                id="tweet"
                rows={3}
                placeholder="Whats happening?"
              />
            </div>
            <div className={classes.btnRow}>
              <div>- - -</div>
              <button
                type="submit"
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
