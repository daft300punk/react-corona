import * as actionTypes from '../constants/actionTypes';

export const category = (selectedCategory) => ({
  type: actionTypes.CHANGE_SELECTED_CATEGORY,
  selectedCategory: selectedCategory
});

export const filter = (selectedFilter) => ({
  type: actionTypes.CHANGE_SELECTED_FILTER,
  selectedFilter: selectedFilter.toLowerCase()
});

export const changeSelectedFilter = (selectedFilter) => (dispatch, getState) => {
  const currentFilter = getState().selectedOptions.filter;
  if(selectedFilter.toLowerCase() !== currentFilter)
    dispatch(filter(selectedFilter));
};
