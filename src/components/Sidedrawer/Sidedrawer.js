import React from 'react';
import classes from './Sidedrawer.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const sideDrawer = (props) => {
  let assignClass = [classes.SideDrawer, classes.Close];
  if(props.isOpen) {
    assignClass = [classes.SideDrawer, classes.Open];
  }
  return (
    <span>
      <div className={assignClass.join(' ')}>
        {props.children}
      </div>
    </span>
  );
};

export default sideDrawer;