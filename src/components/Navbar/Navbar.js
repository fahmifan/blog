import React from 'react';

import Navitem from './Navitem/Navitem';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import classes from './Navbar.module.scss';
import SideDrawer from '../Sidedrawer/Sidedrawer';

const navbar = (props) => (
  <div className={classes.Navbar}>
    <span onClick={props.drawerClicked} className={classes.BurgerIcon}>
      <BurgerIcon/>
    </span>
    <SideDrawer isOpen={props.isOpen}>
      <ul className={classes.sideMenu}>
        <Navitem clicked={props.menuClicked}>Home</Navitem>
        <Navitem clicked={props.menuClicked}>About</Navitem>
      </ul>
    </SideDrawer>
    <nav className={classes.Dispose}>
      <ul>
        <Navitem clicked={props.menuClicked}>Home</Navitem>
        <Navitem clicked={props.menuClicked}>About</Navitem>
      </ul>
    </nav>
  </div>
);

export default navbar;