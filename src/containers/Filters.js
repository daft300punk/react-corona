import React from 'react';
import { connect } from 'react-redux'
import Filters from '../components/Filters';
import {changeSelectedFilter} from '../actions';

const FiltersContainer = ({
  selectedCategory,
  changeSelectedFilter,
  selectedFilter
}) => {
  return (
    <Filters
      selectedCategory={selectedCategory}
      changeSelectedFilter={changeSelectedFilter}
      selectedFilter={selectedFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedOptions.category,
  selectedFilter: state.selectedOptions.filter
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedFilter: (filter) => { dispatch(changeSelectedFilter(filter))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
