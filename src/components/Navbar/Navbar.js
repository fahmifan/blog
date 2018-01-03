import React from 'react';

import Navitem from './Navitem/Navitem';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import classes from './Navbar.module.scss';
import SideDrawer from '../Sidedrawer/Sidedrawer';
import Backbtn from '../BackButton/BackButton';
import logo from '../../assets/blog-logo.png';

const navbar = (props) => (
  <div className={classes.Navbar}>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <span className={classes.BurgerIcon}>
        <BurgerIcon clicked={props.drawerClicked} />
      </span>
    </div>
    <SideDrawer isOpen={props.isOpen}>
      <ul className={classes.sideMenu}>
        <Navitem link="https://fahmifan.github.io">Home</Navitem>
        <Navitem link="https://fahmifan.github.io/about">About</Navitem>
      </ul>
    </SideDrawer>
    <nav className={classes.Dispose}>
      <ul>
        <Navitem link="https://fahmifan.github.io">Home</Navitem>
        <Navitem link="https://fahmifan.github.io/about">About</Navitem>
        {/*<p className={classes.logo}>fahmifan</p>*/}
        {<img src={logo} alt="fahmifan" className={classes.logo} />}
        {props.inContent ? <Backbtn /> : null}
      </ul>
    </nav>
  </div>
);

export default navbar;