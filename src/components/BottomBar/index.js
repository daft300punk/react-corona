import React from 'react';
import './style.scss';

const BottomBar = () => {
  return (
    <div className="bottombar">
      <div>
        <a href="http://www.topcoder.com" target="_blank">
          <img src={require('./logo.png')}/>
        </a>
      </div>
      <div>ACTIVITY</div>
      <div>LEADERBOARD</div>
      <div>SUBMISSIONS</div>
      <div>TOOLS USED</div>
      <div>TCO WINNERS</div>     
    </div>
  );
};

export default BottomBar;
