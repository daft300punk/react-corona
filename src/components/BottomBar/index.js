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
      <div>Option 1</div>
      <div>Option 1</div>
      <div>Option 1</div>
      <div>Option 1</div>
      <div>Option 1</div>
    </div>
  );
};

export default BottomBar;
