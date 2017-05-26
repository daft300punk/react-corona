import React from 'react';
import Globe from '../Globe';
import Welcome from '../Welcome';

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
    }, 2500)
  }

  render() {
    return(
      <div>
        <Globe />
        {this.state.showWelcome && <Welcome />}
      </div>
    );
  }
}


export default Home;
