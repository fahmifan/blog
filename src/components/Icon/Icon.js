import React from 'react';

const icon = (props) => {
  return (
    <div style={{width: '50px'}}>
      <a href={props.link} target="_blank">
        <span style={{fill: '#155799'}}>
          {props.children}
        </span>
      </a>
    </div>
  );
}

export default icon;