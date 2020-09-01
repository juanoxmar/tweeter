import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducer/reducer';

function App() {
  const { idToken } = useSelector((state: RootState) => state.auth);
  let authRoutes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/signup" />
    </Switch>
  );

  if (idToken !== '') {
    authRoutes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" exact component={Layout} />
        <Redirect to="/home" />
      </Switch>
    );
  }
  return <>{authRoutes}</>;
}

export default App;
