import React, { useState, useEffect } from 'react';

import heartRed from '../../assets/svg/heartRed.svg';
import heartBlack from '../../assets/svg/heartBlack.svg';
import avatar from '../../assets/svg/avatar.svg';
import classes from './TweetCard.module.css';
import { userName } from '../../apollo/cache';
import { useLikeMutation, useUnlikeMutation } from '../../apollo/generated';

type Likes = {
  User: { user_name: string };
}[];

type Props = {
  tweetKey: string;
  message: string;
  name: string;
  userName: string;
  likes: Likes;
};

function TweetCard(props: Props) {
  const { message, name, likes, tweetKey } = props;
  const [likesArr, setLikesArr] = useState<Likes>([]);
  const [iLike, setLike] = useState(false);

  const [likeMutation] = useLikeMutation();
  const [unlikeMutation] = useUnlikeMutation();

  useEffect(() => {
    let likesArrCopy: Likes = [];
    if (likes) {
      likesArrCopy = [...likes];
    }
    setLikesArr(likesArrCopy);
  }, [likes]);

  useEffect(() => {
    if (
      likesArr.filter((like) => like.User.user_name === userName()).length > 0
    ) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [likesArr]);

  const likeHandler = async () => {
    if (iLike) {
      try {
        const { data } = await unlikeMutation({
          variables: {
            tweetId: tweetKey,
          },
        });
        setLikesArr([...data?.unLike?.Like!]);
      } catch (error) {
        console.error(error.message);
      }
      setLike(false);
    } else {
      try {
        const { data } = await likeMutation({
          variables: {
            tweetId: tweetKey,
          },
        });
        setLikesArr([...data?.createOneLike.Tweet.Like!]);
      } catch (error) {
        console.error(error.message);
      }
      setLike(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div>
          <div className={classes.handles}>
            <div className={classes.name}>{name}</div>{' '}
            <div className={classes.userName}>@{props.userName}</div>
          </div>
          <div>{message}</div>
          <div className={classes.icons}>
            <img
              src={iLike ? heartRed : heartBlack}
              alt="Like"
              onClick={likeHandler}
            />
            {likesArr.length === 0 ? null : likesArr.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
