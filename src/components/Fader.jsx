import React from 'react';

const FADE_DELAY_MS = 300;
const TRANSITION_TIME_S = 0.5;

/**
 * Fader component
 */
class Fader extends React.Component {
  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = { isVisible: false };
  }

  /**
   * When the component is mounted.
   */
  componentDidMount() {
    setTimeout(() => this.setState({ isVisible: true }), FADE_DELAY_MS);
  }

  /**
   * The render function.
   */
  render() {
    const { isVisible } = this.state;
    const style = {
      visibility: isVisible ? 'visible' : 'hidden',
      opacity: isVisible ? 1 : 0,
      transition: `${TRANSITION_TIME_S}s`,
    };

    return <div style={style}>{this.props.children}</div>;
  }
}

export default Fader;
