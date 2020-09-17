import React from 'react';

import avatar from '../../assets/svg/avatar.svg';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.bar}>
      <div className={classes.avatar}>
        <img src={avatar} alt='' />
      </div>
      <span>Home</span>
    </div>
  );
}

export default Home;
