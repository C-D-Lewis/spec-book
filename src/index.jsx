import React from 'react';
import ReactDOM from 'react-dom';
import FlexContainer from './components/FlexContainer.jsx';
import { NavBar, NavBarSpacer } from './components/NavBar.jsx';
import OperationList from './components/OperationList.jsx';
import SectionMenu from './components/SectionMenu.jsx';
import SpecInput from './components/SpecInput.jsx';
import Theme from './theme';
import Util from './util';

/**
 * Top level application component.
 */
class Application extends React.Component {
  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = {
      specUrl: `${window.location.href}example/petstore.yaml`,
      spec: null,
      sections: [],
      currentSection: null,
    };

    this.setState = this.setState.bind(this);
    this.loadSpecFile = this.loadSpecFile.bind(this);
  }

  /**
   * Load and parse a spec file from the input URL.
   *
   * @param {string} specUrl - URL to the spec file.
   */
  async loadSpecFile(specUrl) {
    const res = await fetch(specUrl);
    const text = await res.text();
    const spec = YAML.parse(text);
    const sections = Util.extractSections(spec);
    const [currentSection] = sections;

    this.setState({ specUrl, spec, sections, currentSection });
  }

  /**
   * When the component is mounted.
   */
  componentDidMount() {
    this.loadSpecFile(this.state.specUrl);
  }

  /**
   * Render function.
   *
   * @returns {HTMLElement} The component.
   */
  render() {
    return (
      <FlexContainer restyle={{
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: Theme.backgroundColor,
      }}>
        <NavBar>
          <SpecInput value={this.state.specUrl} onChange={this.loadSpecFile}/>
        </NavBar>
        <FlexContainer restyle={{ paddingTop: 10 }}>
          <SectionMenu appState={this.state} setAppState={this.setState}/>
          {this.state.currentSection && <OperationList appState={this.state}/>}
        </FlexContainer>
      </FlexContainer>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
