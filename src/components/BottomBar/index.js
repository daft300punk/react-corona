import React from 'react';
import './style.scss';
import {categoryTypes} from '../../constants/categoriesAndFilters';
import PropTypes from 'prop-types';

const BottomBar = ({
  selectedCategory,
  changeSelectedCategory
}) => {
  const modifyClassNameHelper = (categoryText) => {
    let className = '';
    if(categoryText == 'design') 
      className += 'des';
    if(categoryText == 'data science')
      className += 'dsc';
    if(categoryText == 'development')
      className += 'dev';
    return className;
  };

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
          const classSpan = modifyClassNameHelper(categoryText);
          console.log(className);
          return (
            <div
              key={i}
              onClick={() => {changeSelectedCategory(categoryTypes[i]);}}
              className={'category-text ' + className}
            >
              <span className={classSpan}>{categoryText.toUpperCase()}</span>
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
