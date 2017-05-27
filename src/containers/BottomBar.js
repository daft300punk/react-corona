import React from 'react';
import { connect } from 'react-redux';
import BottomBar from '../components/BottomBar';
import {changeSelectedCategory} from '../actions';
import PropTypes from 'prop-types';

const BottomBarContainer = ({
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
  changeSelectedCategory: (filter) => { dispatch(changeSelectedCategory(filter)); }
});

BottomBarContainer.propTypes = {
  selectedCategory: PropTypes.string,
  changeSelectedCategory: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBarContainer);
