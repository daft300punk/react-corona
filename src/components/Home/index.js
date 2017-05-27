import React from 'react';
import Globe from '../Globe';
import Welcome from '../Welcome';
import BottomBar from '../BottomBar';
import Filters from '../Filters';

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


export default Home;
