import React from 'react';
import ReactDOM from 'react-dom';

const AppContainer = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row'
  };

  return <div style={style}>{children}</div>;
};

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      spec: null,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <AppContainer>
        Hely
      </AppContainer>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
