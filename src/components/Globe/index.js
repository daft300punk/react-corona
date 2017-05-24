import React, { Component } from 'react';
import initGlobe from './libs/initGlobe';

class Globe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    initGlobe();
    window.addEventListener('resize', () => {
      document.getElementsByTagName('canvas')[0].remove();
      initGlobe();
    });
  }

  render() {
    return (
      <div id="container"/>
    );
  }
}

export default Globe;
