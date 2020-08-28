import React from 'react';

import classes from './NavBar.module.css';
import home from '../../assets/svg/home.svg';
import ring from '../../assets/svg/ring.svg';
import search from '../../assets/svg/search.svg';
import message from '../../assets/svg/messages.svg';
import user from '../../assets/svg/user.svg';
import IconButton from '../../components/IconButton/IconButton';
import NavAvatar from '../../components/NavAvatar/NavAvatar';

function NavBar() {
  return (
    <div className={classes.container}>
      <nav className={classes.navBar}>
        <IconButton icon={home}>Home</IconButton>
        <IconButton icon={search}>Explore</IconButton>
        <IconButton icon={ring}>Notifications</IconButton>
        <IconButton icon={message}>Messages</IconButton>
        <IconButton icon={user}>Profile</IconButton>
      </nav>
      <NavAvatar />
    </div>
  );
}

export default NavBar;
