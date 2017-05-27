import React from 'react';
import './style.scss';
import {categories} from '../../constants/categoriesAndFilters';

const Filters = ({
  selectedCategory,
  selectedFilter,
  changeSelectedFilter
}) => {
  const filters = categories[selectedCategory].filters;
  return(
    <div className="container">
      <h2>{selectedCategory.toUpperCase()}</h2>
      <p>{categories[selectedCategory].text}</p>
      <h4>Select Filters</h4>
      <ul>
        {
          filters.map((filter, i) => {
            let className = '';
            if(selectedFilter === filter.toLowerCase())
              className += 'active';
            console.log(filter.toLowerCase(), selectedFilter);
            return (
              <li
                key={i}
                onClick={() => changeSelectedFilter(filters[i])}
                className={className}
              >
                {filter}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Filters;
