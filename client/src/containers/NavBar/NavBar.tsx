import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import classes from './NavBar.module.css';
import home from '../../assets/svg/home.svg';
import user from '../../assets/svg/user.svg';
import IconButton from '../../components/IconButton/IconButton';
import NavAvatar from '../../components/NavAvatar/NavAvatar';
import TweetModal from '../../components/TweetModal/TweetModal';

function NavBar() {
  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <Logo />
        <Link to="/tweeter/home">
          <IconButton icon={home}>Home</IconButton>
        </Link>
        <Link to={`/tweeter/home/joxmar`}>
          <IconButton icon={user}>Profile</IconButton>
        </Link>
        <TweetModal />
      </nav>
      <NavAvatar name="Juan" userName="joxmar" />
    </div>
  );
}

export default NavBar;
