import React from 'react';
import Link from 'gatsby-link';

import classes from './BackButton.module.scss';

const backbtn = (props) => (
  <Link to="/">
    <div className={classes.Backbtn}>
      {`Back`}
    </div>
  </Link>
);

export default backbtn;