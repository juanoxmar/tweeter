import React from 'react';

import NavBar from '../NavBar/NavBar';
import classes from './Layout.module.css';
import Content from '../Content/Content';
import Trend from '../Trend/Trend';
import { Switch, Route } from 'react-router-dom';
import { userName } from '../../apollo/cache';

function Layout() {
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <NavBar />
      </div>
      <Switch>
        <Route
          path={`/home/${userName()}`}
          render={() => <Content profile={true} />}
        />
        <Route path="/home" render={() => <Content profile={false} />} />
      </Switch>
      <div className={classes.trend}>
        <div className={classes.border}></div>
        <Trend />
      </div>
    </div>
  );
}

export default Layout;
