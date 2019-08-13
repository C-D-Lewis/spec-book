import React from 'react';

const SpecInput = ({ value, onChange }) => {
  const style = {
    fontSize: '1.5rem',
    border: 'none',
    borderBottom: '1px solid darkgrey',
    marginLeft: 50,
    height: 30,
    width: '60%',
  };

  return <input type="text" value={value} style={style}/>;
};

export default SpecInput;
