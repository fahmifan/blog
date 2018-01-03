import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Media from 'react-media';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './index.css';
import BurgerIcon from '../components/BurgerIcon/BurgerIcon';
import Sidedrawer from '../components/Sidedrawer/Sidedrawer';
import Backdrop from '../components/Backdrop/Backdrop';

class TemplateWrapper extends Component {
  state = {
    drawerIsOpen: false,
    isContentRead: false
  }

  drawerOpenHandler = () => {
    this.setState({
      drawerIsOpen: true
    })
  }

  drawerCloseHandler = () => {
    this.setState({
      drawerIsOpen: false
    })
  }
  
  render() {
    return (
      <div>
        <Helmet
          title="fahmifan blog"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Backdrop 
          show={this.state.drawerIsOpen} 
          clicked={this.drawerCloseHandler}/>
        <Navbar 
          drawerClicked={this.drawerOpenHandler} 
          isOpen={this.state.drawerIsOpen}
        />
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
