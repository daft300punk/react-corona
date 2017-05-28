import React, { Component } from 'react';
import initGlobe from './libs/initGlobe';
import PropTypes from 'prop-types';

class Globe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      data,
      sizeOfPoint,
      vizType
    } = this.props;

    initGlobe(data, sizeOfPoint, vizType);
    
    window.addEventListener('resize', () => {
      document.getElementsByTagName('canvas')[0].remove();
      initGlobe(data, sizeOfPoint, vizType);
    });
  }

  render() {
    return (
      <div id="container"/>
    );
  }
}

Globe.propTypes = {
  data: PropTypes.array,
  sizeOfPoint: PropTypes.number,
  vizType: PropTypes.string
};

export default Globe;
