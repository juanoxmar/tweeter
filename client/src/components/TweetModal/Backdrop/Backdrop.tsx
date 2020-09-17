import React from 'react';
import classes from './Backdrop.module.css';

type Props = {
  show: boolean;
  clicked?: () => void;
};

const Backdrop = ({ show, clicked }: Props) =>
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null;

export default Backdrop;
