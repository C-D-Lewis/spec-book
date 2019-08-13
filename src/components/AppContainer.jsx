import React from 'react';
import Theme from '../theme';

const AppContainer = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: Theme.backgroundColor,
  };

  return <div style={style}>{children}</div>;
};

export default AppContainer;
