import React from 'react';

const navitem = (props) => (
  <a href={props.link}><li>{props.children}</li></a>
);

export default navitem;