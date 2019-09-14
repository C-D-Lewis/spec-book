import React from 'react';
import Fader from './Fader.jsx';
import FlexContainer from './FlexContainer.jsx';
import { NAVBAR_HEIGHT } from './NavBar.jsx';
import Theme from '../theme';

const cap = s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const CategoryItem = (category, appState, setAppState) => {
  const isSelected = appState.currentCategory.name === category.name;
  const style = {
    padding: 15,
    paddingLeft: 10,
    fontSize: '1.2rem',
    fontWeight: isSelected ? 'bold' : 'initial',
    backgroundColor: isSelected ? 'white' : Theme.categoryList.backgroundColor,
    cursor: 'pointer',
  };

  return (
    <div key={category.name} style={style} onClick={() => setAppState({ currentCategory: category })}>
      {cap(category.name)}
    </div>
  );
};

const CategoryList = ({ children, appState, setAppState }) => {
  const style = {
    flexDirection: 'column',
    minWidth: 200,
    height: '100%',
    backgroundColor: Theme.categoryList.backgroundColor,
  };

  return (
    <Fader>
      <FlexContainer restyle={style}>
        {appState.categories.map(p => CategoryItem(p, appState, setAppState))}
      </FlexContainer>
    </Fader>
  );
};

export default CategoryList;
