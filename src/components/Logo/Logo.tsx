import React from 'react';

import logo from '../../assets/svg/TwitterLogo.svg';
import classes from './Logo.module.css';

function Logo() {
  return (
    <div className={classes.logo}>
      <div className={classes.inner}>
        <img src={logo} alt='Logo' />
      </div>
    </div>
  );
}

export default Logo;
