import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showAnimation: false,
  isFirstLoad: true
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.FIRST_LOAD:
      return Object.assign({}, state, {
        isFirstLoad: false
      });
    case actionTypes.SHOW_ANIMATION:
      return Object.assign({},state, {
        showAnimation: action.showAnimation
      });
    default: return state;
  }
}