import React, { useState, useEffect } from 'react';

import heartRed from '../../assets/svg/heartRed.svg';
import heartBlack from '../../assets/svg/heartBlack.svg';
import avatar from '../../assets/svg/avatar.svg';
import classes from './TweetCard.module.css';

type Props = {
  tweetKey: string;
  message: string;
  name: string;
  userName: string;
  likes: { User: { user_name: string } }[];
};

type unLikeResponse = {
  unlike: { Like: { User: { user_name: string } }[] };
};

type likeResponse = {
  createOneLike: { Tweet: { Like: { User: { user_name: string } }[] } };
};

function TweetCard(props: Props) {
  const { message, name, userName, likes, tweetKey } = props;
  const [likesArr, setLikesArr] = useState<{ User: { user_name: string } }[]>(
    []
  );
  const [iLike, setLike] = useState(false);

  useEffect(() => {
    if (likes) {
      const likesArrCopy = [...likes];
      setLikesArr(likesArrCopy);
    }
  }, [likes]);

  useEffect(() => {
    if (
      likesArr.filter((like) => like.User.user_name === userName).length > 0
    ) {
      setLike(true);
    }
  }, [likesArr, userName]);

  // const likeHandler = async () => {
  //   if (!iLike) {
  //     try {
  //       console.log(tweetKey);
  //       const response: unLikeResponse = await client.request(UNLIKE, {
  //         tweetId: tweetKey,
  //       });
  //       console.log('unlike', response);
  //       setLikesArr(response.unlike.Like);
  //     } catch (error) {
  //       console.error(error.response);
  //     }
  //     setLike(true);
  //   } else {
  //     try {
  //       client.setHeader('Authorization', `Bearer ${token}`);
  //       const response: likeResponse = await client.request(LIKE, {
  //         tweetId: tweetKey,
  //       });
  //       console.log('like', response);
  //       setLikesArr(response.createOneLike.Tweet.Like);
  //     } catch (error) {
  //       console.error(error.response);
  //     }
  //     setLike(false);
  //   }
  // };

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
            <img src={heart} alt="" />
            {likesArr.length === 0 ? null : likesArr.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
