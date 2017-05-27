import React from 'react';
import './style.scss';
import {categoryTypes} from '../../constants/categoriesAndFilters';
import PropTypes from 'prop-types';

const BottomBar = ({
  selectedCategory,
  changeSelectedCategory
}) => {
  return (
    <div className="bottombar">
      <div>
        <a href="http://www.topcoder.com" target="_blank">
          <img src={require('./logo.png')}/>
        </a>
      </div>
      {
        categoryTypes.map((categoryText, i) => {
          let className='';
          if(selectedCategory === categoryText)
            className += 'active';
          return (
            <div
              key={i}
              onClick={() => {changeSelectedCategory(categoryTypes[i]);}}
              className={'category-text ' + className}
            >
              {categoryText.toUpperCase()}
            </div>
          );
        })
      }
    </div>
  );
};

BottomBar.propTypes = {
  selectedCategory: PropTypes.string,
  changeSelectedCategory: PropTypes.func
};

export default BottomBar;
