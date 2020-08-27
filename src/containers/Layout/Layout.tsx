import React from 'react';

import NavBar from '../NavBar/NavBar';
import classes from './Layout.module.css';

function Layout() {
  return (
    <div className={classes.container}>
      <NavBar />
    </div>
  );
}

export default Layout;
