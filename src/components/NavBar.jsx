import React from 'react';
import Theme from '../theme';

const NavBar = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    boxShadow: '0px 2px 7px -2px black',
    backgroundColor: Theme.navbarBackgroundColor,
  };

  return <div style={style}>{children}</div>;
};

export default NavBar;
