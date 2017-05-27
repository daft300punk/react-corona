import React from 'react';
import Globe from '../components/Globe';
import Welcome from '../components/Welcome';
import BottomBar from '../components/BottomBar';
import Filters from './Filters';
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
        <Filters />
        <BottomBar />
      </div>
    );
  }
}

export default connect()(Home);
