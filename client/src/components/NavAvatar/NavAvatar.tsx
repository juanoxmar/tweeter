import React from 'react';

import avatar from '../../assets/svg/avatar.svg';
import classes from './NavAvatar.module.css';

type Props = {
  name: string;
  userName: string;
};

function NavAvatar(props: Props) {
  const { name, userName } = props;
  return (
    <div className={classes.avatar}>
      <img src={avatar} alt="" />
      <div className={classes.handles}>
        <span>
          <strong>{name}</strong>
        </span>
        <span>@{userName}</span>
      </div>
    </div>
  );
}

export default NavAvatar;
