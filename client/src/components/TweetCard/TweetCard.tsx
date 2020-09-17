import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import axios from '../../config/axios';
import heartRed from '../../assets/svg/heartRed.svg';
import heartBlack from '../../assets/svg/heartBlack.svg';
import avatar from '../../assets/svg/avatar.svg';
import classes from './TweetCard.module.css';
import { RootState } from '../../store/reducer/reducer';

type Props = {
  message: string;
  name: string;
  userName: string;
  tweetKey: string;
  likes: { [key: string]: string };
};

function TweetCard(props: Props) {
  const { message, name, userName, tweetKey, likes } = props;
  const [likesArr, setLikesArr] = useState<string[]>([]);
  const [iLike, setLike] = useState(false);

  const { localId, idToken } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const likesArrCopy = [];
    if (likes) {
      for (const key in likes) {
        likesArrCopy.push(likes[key]);
      }
    }
    setLikesArr(likesArrCopy);
  }, [likes]);

  useEffect(() => {
    if (likesArr.includes(localId)) {
      setLike(true);
    }
  }, [likesArr, localId]);

  const likeHandler = async () => {
    if (!iLike) {
      try {
        await axios.patch(`/tweets/${tweetKey}/likes.json?auth=${idToken}`, {
          [localId]: localId,
        });
        setLikesArr([...likesArr, localId]);
      } catch (error) {
        console.error(error.response);
      }
      setLike(true);
    } else {
      const newArr = [...likesArr];
      const index = newArr.indexOf(localId);
      newArr.splice(index, 1);
      setLikesArr(newArr);
      try {
        await axios.delete(
          `/tweets/${tweetKey}/likes/${localId}.json?auth=${idToken}`
        );
      } catch (error) {
        console.error(error.response);
      }
      setLike(false);
    }
  };

  let heart = heartBlack;
  if (iLike) {
    heart = heartRed;
  }

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div>
          <div className={classes.handles}>
            <div className={classes.name}>{name}</div>{' '}
            <div className={classes.userName}>@{userName}</div>
          </div>
          <div>{message}</div>
          <div className={classes.icons}>
            <img src={heart} alt="" onClick={likeHandler} />
            {likesArr.length === 0 ? null : likesArr.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
