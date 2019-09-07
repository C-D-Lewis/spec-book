import React from 'react';
import Fader from './Fader.jsx';
import FlexContainer from './FlexContainer.jsx';
import { NAVBAR_HEIGHT } from './NavBar.jsx';
import Theme from '../theme';

const cap = s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const SectionItem = (section, appState, setAppState) => {
  const isSelected = appState.currentSection.name === section.name;
  const style = {
    padding: 15,
    paddingLeft: 10,
    fontSize: '1.2rem',
    fontWeight: isSelected ? 'bold' : 'initial',
    backgroundColor: isSelected ? 'white' : '#eee',
    cursor: 'pointer',
  };

  return (
    <div key={section.name} style={style}onClick={() => setAppState({ currentSection: section })}>
      {cap(section.name)}
    </div>
  );
};

const SectionMenu = ({ children, appState, setAppState }) => {
  const style = {
    flexDirection: 'column',
    minWidth: 200,
    height: '100%',
    backgroundColor: Theme.navbarBackgroundColor,
  };

  return (
    <Fader>
      <FlexContainer restyle={style}>
        {appState.sections.map(p => SectionItem(p, appState, setAppState))}
      </FlexContainer>
    </Fader>
  );
};

export default SectionMenu;
