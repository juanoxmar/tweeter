import React from 'react';

import NavBar from '../NavBar/NavBar';
import classes from './Layout.module.css';
import Content from '../Content/Content';
import Trend from '../Trend/Trend';

function Layout() {
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <NavBar />
      </div>
      <div>
        <Content />
      </div>
      <div className={classes.trend}>
        <Trend />
      </div>
    </div>
  );
}

export default Layout;
