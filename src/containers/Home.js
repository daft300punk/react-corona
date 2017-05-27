import React from 'react';
import Globe from '../components/Globe';
import Welcome from '../components/Welcome';
import BottomBarContainer from './BottomBar';
import FiltersContainer from './Filters';
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcome: true
    };
  }

  componentDidMount() {
    this.startTimer();
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
        <FiltersContainer />
        <BottomBarContainer />
      </div>
    );
  }
}

export default connect()(Home);
