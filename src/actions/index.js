import * as actionTypes from '../constants/actionTypes';
import initGlobe from '../components/Globe/libs/initGlobe';

export const category = (selectedCategory) => ({
  type: actionTypes.CHANGE_SELECTED_CATEGORY,
  selectedCategory: selectedCategory.toLowerCase()
});

export const filter = (selectedFilter) => ({
  type: actionTypes.CHANGE_SELECTED_FILTER,
  selectedFilter: selectedFilter.toLowerCase()
});

export const changeSelectedFilter = (selectedFilter) => (dispatch, getState) => {
  const currentFilter = getState().selectedOptions.filter;
  if(selectedFilter.toLowerCase() !== currentFilter) {
    dispatch(filter(selectedFilter));
    initGlobe();
  }
};

export const changeSelectedCategory = (selectedCategory) => (dispatch, getState) => {
  const currentCategory = getState().selectedOptions.category;

  if(selectedCategory.toLowerCase() !== currentCategory) {
    dispatch(category(selectedCategory));
    initGlobe();
  }
}
