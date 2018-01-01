import React from 'react';

const navitem = (props) => (
  <li><a href="#" onClick={props.clicked}>{props.children}</a></li>
);

export default navitem;