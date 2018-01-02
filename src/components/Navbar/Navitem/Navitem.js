import React from 'react';

const navitem = (props) => (
  <a href={props.link} target="_blank"><li>{props.children}</li></a>
);

export default navitem;