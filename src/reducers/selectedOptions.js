import * as actionTypes from '../constants/actionTypes';
import {categories, categoryTypes } from '../constants/categoriesAndFilters';

const initialState = {
  category: categoryTypes.ACTIVITIES,
  filter: 'development'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_SELECTED_CATEGORY :
      return Object.assign({}, state, {
        category: action.selectedCategory,
        filter: (categories[action.selectedFilter].filters)[0]
      });

    case actionTypes.CHANGE_SELECTED_FILTER:
      return Object.assign({}, state, {
        filter: action.selectedFilter
      });

    default: return state;
  }
}
