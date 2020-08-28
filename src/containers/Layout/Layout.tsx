import React from 'react';

import NavBar from '../NavBar/NavBar';
import classes from './Layout.module.css';
import Content from '../Content/Content';
import Trend from '../Trend/Trend';

function Layout() {
  return (
    <div className={classes.container}>
      <NavBar />
      <Content />
      <Trend />
    </div>
  );
}

export default Layout;
