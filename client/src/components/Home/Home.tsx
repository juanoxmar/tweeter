import React from 'react';

import avatar from '../../assets/svg/avatar.svg';
import classes from './Home.module.css';

type Props = {
  header: string;
};

function Home(props: Props) {
  const { header } = props;
  return (
    <div className={classes.bar}>
      <div className={classes.avatar}>
        <img src={avatar} alt="" />
      </div>
      <span>{header}</span>
    </div>
  );
}

export default Home;
