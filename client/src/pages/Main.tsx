import React from 'react';
import classes from './Main.module.css';

type Props = {
  children: React.ReactNode;
};

function main(props: Props) {
  const { children } = props;
  return <main className={classes.container}>{children}</main>;
}

export default main;
