import React from 'react';
import Theme from '../theme';

const PageContainer = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  };

  return <div style={style}>{children}</div>;
};

export default PageContainer;
