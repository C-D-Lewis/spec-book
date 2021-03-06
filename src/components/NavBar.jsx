import React from 'react';
import Fader from './Fader.jsx';
import Theme from '../theme';

export const NAVBAR_HEIGHT = 60;

export const NavBar = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: NAVBAR_HEIGHT,
    // boxShadow: '0px 2px 7px -2px black',
    borderBottom: `solid 1px ${Theme.separatorColor}`,
    backgroundColor: Theme.navbar.backgroundColor,
    zIndex: 999,
  };

  return (
    <Fader>
      <div style={style}>{children}</div>
    </Fader>
  );
};

export const NavBarSpacer = () => {
  const style = {
    width: '100%',
    height: NAVBAR_HEIGHT + 20,
  };

  return <div style={style}/>;
};
