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
    this.state = {
      showWelcome: false
    };
  }

  componentDidMount() {
    this.startTimer();
    const { getDataFirstTime } = this.props;
    getDataFirstTime();
  }

  componentWillReceiveProps(nextProps) {
    const { isDataFetchedFirstTime } = nextProps;
    if(isDataFetchedFirstTime) {
      this.setState({
        showWelcome: true
      });
      this.startTimer();
    }         
  }

  startTimer() {
    setTimeout(() => {
      this.setState({
        showWelcome: false
      });
    }, 2500);
  }

  render() {
    return(
      <div>
        <Globe />
        {this.state.showWelcome && <Welcome />}
        {
          (isRequesting == true) ?
          <Loader color="#fff" size="12px" className="loader"/> :
          <Globe />
        }
        <FiltersContainer />
        <BottomBarContainer />
      </div>
    );
  }
}

Home.propTypes = {
  getDataFirstTime: PropTypes.func,
  isDataFetchedFirstTime: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isDataFetchedFirstTime: state.globeData.isDataFetchedFirstTime
});

const mapDispatchToProps = (dispatch) => ({
  getDataFirstTime: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
