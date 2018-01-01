import React from 'react';

const navitem = (props) => (
  <a href="#" onClick={props.clicked}><li>{props.children}</li></a>
);

export default navitem;