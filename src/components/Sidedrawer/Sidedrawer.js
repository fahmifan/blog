import React from 'react';
import classes from './Sidedrawer.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import LogoImg from '../../assets/blog-logo.png';

const sideDrawer = (props) => {
  let assignClass = [classes.SideDrawer, classes.Close];
  if(props.isOpen) {
    assignClass = [classes.SideDrawer, classes.Open];
  }
  return (
    <span>
      <div className={assignClass.join(' ')}>
        <img className={classes.LogoImg} src={LogoImg} alt="fahmifan" />
        <span>{props.children}</span>
      </div>
    </span>
  );
};

export default sideDrawer;