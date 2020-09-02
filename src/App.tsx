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
      <Route path="/tweeter/login" component={Login} />
      <Route path="/tweeter/signup" exact component={Signup} />
      <Redirect to="/tweeter/signup" />
    </Switch>
  );

  if (idToken !== '') {
    authRoutes = (
      <Switch>
        <Route path="/tweeter/login" component={Login} />
        <Route path="/tweeter/signup" component={Signup} />
        <Route path="/tweeter" exact component={Layout} />
        <Redirect to="/tweeter" />
      </Switch>
    );
  }
  return <>{authRoutes}</>;
}

export default App;
