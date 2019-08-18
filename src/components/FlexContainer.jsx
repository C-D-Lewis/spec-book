import React from 'react';

const FlexContainer = ({ children, restyle }) => {
  const style = Object.assign({
    display: 'flex',
    flexDirection: 'row',
  }, restyle);

  return <div style={style}>{children}</div>;
};

export default FlexContainer;
