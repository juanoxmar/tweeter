import React from 'react';

import Logo from '../../components/Logo/Logo';
import classes from './NavBar.module.css';
import home from '../../assets/svg/home.svg';
import ring from '../../assets/svg/ring.svg';
import search from '../../assets/svg/search.svg';
import message from '../../assets/svg/messages.svg';
import user from '../../assets/svg/user.svg';
import IconButton from '../../components/IconButton/IconButton';
import NavAvatar from '../../components/NavAvatar/NavAvatar';
import TweetModal from '../../components/TweetModal/TweetModal';

function NavBar() {
  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <Logo />
        <IconButton icon={home}>Home</IconButton>
        <IconButton icon={search}>Explore</IconButton>
        <IconButton icon={ring}>Notifications</IconButton>
        <IconButton icon={message}>Messages</IconButton>
        <IconButton icon={user}>Profile</IconButton>
        <TweetModal />
      </nav>
      <NavAvatar />
    </div>
  );
}

export default NavBar;
