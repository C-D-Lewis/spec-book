import React from 'react';
import Fader from './Fader.jsx';
import FlexContainer from './FlexContainer.jsx';
import Theme from '../theme';

const SectionItem = (item) => {
  const style = {
    padding: 15,
  };

  return <div style={style}>{item.name}</div>;
};

const SectionMenu = ({ children, sections }) => {
  const style = {
    flexDirection: 'column',
    width: 200,
    height: '100%',
    backgroundColor: Theme.navbarBackgroundColor,
    borderRight: '1px solid black',
  };

  return (
    <Fader>
      <FlexContainer restyle={style}>
        {sections.map(SectionItem)}
      </FlexContainer>
    </Fader>
  );
};

export default SectionMenu;
