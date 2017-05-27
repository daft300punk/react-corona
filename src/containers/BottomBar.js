import React from 'react';
import { connect } from 'react-redux'
import BottomBar from '../components/BottomBar';
import {changeSelectedCategory} from '../actions';

const FiltersContainer = ({
  selectedCategory,
  changeSelectedCategory
}) => {
  return (
    <BottomBar
      selectedCategory={selectedCategory}
      changeSelectedCategory={changeSelectedCategory}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedOptions.category
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedCategory: (filter) => { dispatch(changeSelectedCategory(filter))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
