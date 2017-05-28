import React from 'react';
import Globe from './Globe';
import Welcome from '../components/Welcome';
import BottomBarContainer from './BottomBar';
import FiltersContainer from './Filters';
import {connect} from 'react-redux';
import {getData} from '../actions';
import PropTypes from 'prop-types';
import Loader from 'halogen/PulseLoader';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getDataFirstTime } = this.props;
    getDataFirstTime();
  }

  render() {
    const {isRequesting} = this.props;
    return(
      <div>
        {
          (isRequesting == true) ?
          <Loader color="#fff" size="12px" className="loader"/> :
          <Globe />
        }
        {this.props.showAnimation && <Welcome />}
        <FiltersContainer />
        <BottomBarContainer />
      </div>
    );
  }
}

Home.propTypes = {
  getDataFirstTime: PropTypes.func,
  isRequesting: PropTypes.bool,
  showAnimation: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isRequesting: state.globeData.isRequesting,
  showAnimation: state.firstLoad.showAnimation
});

const mapDispatchToProps = (dispatch) => ({
  getDataFirstTime: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
