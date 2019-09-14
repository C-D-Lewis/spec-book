import React from 'react';
import Fader from './Fader.jsx';
import FlexContainer from './FlexContainer.jsx';
import { NAVBAR_HEIGHT, NavBarSpacer } from './NavBar.jsx';
import Theme from '../theme';

const MethodView = ({ children }) => {
  const style = {
    fontSize: '1.5rem',
    color: Theme.operationList.methodColor,
    marginRight: 10,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  };

  return <div style={style}>{children.toUpperCase()}</div>;
};

const PathView = ({ children }) => {
  const style = {
    fontSize: '1.5rem',
    color: Theme.operationList.pathColor,
    fontFamily: 'Ubuntu Mono',
  };

  return <div style={style}>{children}</div>;
};

const OperationListItem = (operation, appState) => {
  const key = operation.method + operation.path;
  return (
    <FlexContainer key={key} restyle={{
      flexDirection: 'column',
      marginBottom: 40,
    }}>
      <FlexContainer>
        <MethodView>{operation.method}</MethodView>
        <PathView>{operation.path}</PathView>
      </FlexContainer>
      {JSON.stringify(operation)}
    </FlexContainer>
  );
};

const OperationList = ({ children, appState }) => {
  const { operations } = appState.currentCategory;
  const style = {
    flexDirection: 'column',
    minWidth: 200,
    height: '100%',
    backgroundColor: Theme.operationList.backgroundColor,
    marginLeft: 15,
    paddingTop: 10,
  };

  return (
    <Fader>
      <FlexContainer restyle={style}>
        {operations.map(p => OperationListItem(p, appState))}
      </FlexContainer>
    </Fader>
  );
};

export default OperationList;
