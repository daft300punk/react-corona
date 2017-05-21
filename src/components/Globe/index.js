import React, { Component } from 'react';
import initGlobe from './libs/initGlobe';

class Globe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const jsonData = {};
    initGlobe(jsonData);
    window.addEventListener('resize', () => initGlobe(jsonData));
  }

  render() {
    return (
      <div id="container"/>
    );
  }
}

export default Globe;
