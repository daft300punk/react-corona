import * as actionTypes from '../constants/actionTypes';

const initialState = {
  data: [],
  vizType: 'flat',
  sizeOfPoint: 2,
  isRequesting: false,
  errorMsg: '',
  isDataFetchedFirstTime: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.REQUEST_DATA:
      return Object.assign({}, state, {
        isRequesting: true
      });

    case actionTypes.RECEIVE_DATA:
      const viz = action.data[0].magnitude ? 'magnitude' : 'flat';
      return Object.assign({}, state, {
        data: [...(action.data)],
        isRequesting: false,
        vizType: viz,
        isDataFetchedFirstTime: true
      });

    case actionTypes.ERROR:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isRequesting:false
      });
    default: return state;
  }
}
