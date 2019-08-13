import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer.jsx';
import NavBar from './components/NavBar.jsx';
import SpecInput from './components/SpecInput.jsx';
import Theme from './theme';

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      specUrl: `${window.location.href}example/petstore.yaml`,
      spec: null,
    };

    this.loadSpecFile = this.loadSpecFile.bind(this);
  }

  async loadSpecFile(specUrl) {
    this.setState({ specUrl });

    const res = await fetch(specUrl);
    const text = await res.text();
    const yaml = YAML.load(text);
    alert(yaml.info)
  }

  componentDidMount() {
    this.loadSpecFile(this.state.specUrl);
  }

  render() {
    return (
      <AppContainer>
        <NavBar>
          <SpecInput value={this.state.specUrl} onChange={this.loadSpecFile}/>
        </NavBar>
      </AppContainer>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
