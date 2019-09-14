import React from 'react';
import Fader from './Fader.jsx';
import FlexContainer from './FlexContainer.jsx';
import { NAVBAR_HEIGHT, NavBarSpacer } from './NavBar.jsx';
import Theme from '../theme';

const SummaryView = ({ children }) => {
  const style = {
    color: Theme.operationList.summaryColor,
    fontFamily: 'Montserrat',
    fontSize: '1.3rem',
    fontStyle: 'italic',
  };

  return <div style={style}>{children}</div>;
};

const MethodView = ({ children }) => {
  const style = {
    color: Theme.operationList.methodColor,
    marginRight: 10,
    fontSize: '1.5rem',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  };

  return <div style={style}>{children.toUpperCase()}</div>;
};

const PathView = ({ children }) => {
  const style = {
    color: Theme.operationList.pathColor,
    fontFamily: 'Ubuntu Mono',
    fontSize: '1.5rem',
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
      <SummaryView>{operation.summary}</SummaryView>
      <FlexContainer restyle={{ padding: '5px 0px' }}>
        <MethodView>{operation.method}</MethodView>
        <PathView>{operation.path}</PathView>
      </FlexContainer>
      <div style={{ color: '#ddd' }}>
        {JSON.stringify(operation)}
      </div>
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
