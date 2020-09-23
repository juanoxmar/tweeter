import React from 'react';

import NavBar from '../NavBar/NavBar';
import classes from './Layout.module.css';
import Content from '../Content/Content';
import Trend from '../Trend/Trend';
import Profile from '../../components/Profile/Profile';
import { Switch, Route } from 'react-router-dom';
import { userName } from '../../apollo/cache';

function Layout() {
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <NavBar />
      </div>
      <Switch>
        <Route path={`/tweeter/home/${userName()}`} exact component={Profile} />
        <Route path="/tweeter/home" component={Content} />
      </Switch>
      <div className={classes.trend}>
        <div className={classes.border}></div>
        <Trend />
      </div>
    </div>
  );
}

export default Layout;
