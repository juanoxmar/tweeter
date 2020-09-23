import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './pages/Main';

function App() {
  // const { token, userName } = useSelector((state: RootState) => state.auth);
  // let authRoutes = (
  //   <Switch>
  //     <Route path="/tweeter/login" exact component={Login} />
  //     <Route path="/tweeter" exact component={Signup} />
  //     <Redirect to="/tweeter" />
  //   </Switch>
  // );

  // if (window.localStorage.getItem('token')) {
  const authRoutes = (
    <Switch>
      <Route path={`/tweeter/home/joxmar`} component={Layout} />
      <Route path="/tweeter/login" exact component={Login} />
      <Route path="/tweeter/signup" exact component={Signup} />
      <Route path="/tweeter/home" exact component={Layout} />
      <Redirect to="/tweeter/home" />
    </Switch>
  );
  // }
  return <Main>{authRoutes}</Main>;
}

export default App;
