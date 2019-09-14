import React from 'react';
import ReactDOM from 'react-dom';
import FlexContainer from './components/FlexContainer.jsx';
import { NavBar, NavBarSpacer } from './components/NavBar.jsx';
import OperationList from './components/OperationList.jsx';
import CategoryLIst from './components/CategoryLIst.jsx';
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
      categories: [],
      currentCategory: null,
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
    try {
      const res = await fetch(specUrl);
      const text = await res.text();
      const spec = YAML.parse(text);
      const categories = Util.extractCategories(spec);
      const [currentCategory] = categories;

      this.setState({ specUrl, spec, categories, currentCategory });
    } catch (e) {
      // Probably incomplete or incorrect URL
      this.setState({
        specUrl,
        spec: null,
        categories: [],
        currentCategory: null,
      });
    }
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
        <FlexContainer restyle={{ height: '100vh' }}>
          <CategoryLIst appState={this.state} setAppState={this.setState}/>
          {this.state.currentCategory && <OperationList appState={this.state}/>}
        </FlexContainer>
      </FlexContainer>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
