import React from 'react';

import avatar from '../../assets/svg/avatar.svg';
import classes from './NavAvatar.module.css';

function NavAvatar() {
  return (
    <div className={classes.avatar}>
      <img src={avatar} alt="" />
      <div className={classes.handles}>
        <span>
          <strong>Name</strong>
        </span>
        <span>@Handle</span>
      </div>
    </div>
  );
}

export default NavAvatar;
