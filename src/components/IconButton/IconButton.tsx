import React from 'react';
import classes from './IconButton.module.css';

type Props = {
  icon: string;
  children: React.ReactNode;
};

function IconButton(props: Props) {
  const { children, icon } = props;
  return (
    <a href='/' className={classes.btn}>
      <div>
        <img src={icon} alt='Home' />
        <span>{children}</span>
      </div>
    </a>
  );
}

export default IconButton;
