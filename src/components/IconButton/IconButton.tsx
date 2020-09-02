import React from 'react';
import classes from './IconButton.module.css';

type Props = {
  icon: string;
  children: React.ReactNode;
};

function IconButton(props: Props) {
  const { children, icon } = props;
  return (
    <button className={classes.btn} disabled>
      <div>
        <img src={icon} alt="Home" />
        <span>{children}</span>
      </div>
    </button>
  );
}

export default IconButton;
