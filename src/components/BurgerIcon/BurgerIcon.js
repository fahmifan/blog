import React from 'react';
import classes from './BurgerIcon.module.scss';

const burgerIcon = (props) => (
  <div onClick={props.clicked} className={classes.BurgerIcon}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default burgerIcon;