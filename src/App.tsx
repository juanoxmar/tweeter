import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Layout} />
        <Redirect to='/home' />
      </Switch>
    </>
  );
}

export default App;
