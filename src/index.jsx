import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer.jsx';
import PageContainer from './components/PageContainer.jsx';
import { NavBar, NavBarSpacer } from './components/NavBar.jsx';
import SectionMenu from './components/SectionMenu.jsx';
import SpecInput from './components/SpecInput.jsx';
import Theme from './theme';

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
    };

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

    // Generate sections data containing requests
    const sections = [];
    Object.entries(spec.paths).forEach(([path, pathObj]) => {
      Object.entries(pathObj).forEach(([method, operation]) => {
        let foundSection = sections.find(p => p.name === operation.tags[0]);
        if (!foundSection) {
          foundSection = { name: operation.tags[0], operations: [] };
          sections.push(foundSection);
        }

        const newOperation = Object.assign({}, operation, { path, method });
        foundSection.operations.push(newOperation);
      });
    });

    this.setState({ specUrl, spec, sections });
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
      <AppContainer>
        <NavBar>
          <SpecInput value={this.state.specUrl} onChange={this.loadSpecFile}/>
        </NavBar>
        <NavBarSpacer/>
        <PageContainer>
          <SectionMenu sections={this.state.sections}/>
        </PageContainer>
      </AppContainer>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
