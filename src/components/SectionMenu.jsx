import React from 'react';
import Fader from './Fader.jsx';
import Theme from '../theme';

const SectionItem = (item) => {
  const style = {
    padding: 15,
  };

  return <div style={style}>{item.name}</div>;
};

const SectionMenu = ({ children, sections }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    backgroundColor: Theme.navbarBackgroundColor,
  };

  return (
    <Fader>
      <div style={style}>{sections.map(SectionItem)}</div>
    </Fader>
  );
};

export default SectionMenu;
