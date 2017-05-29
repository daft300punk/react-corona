import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions';

describe ('Sync action creators', () => {
  it('should create action for first load', () => {
    const expectedAction = {
      type: actionTypes.FIRST_LOAD
    };

    expect(actions.firstLoad())
    .toEqual(expectedAction);
  });

  it('should create action for showing animation', () => {
    const expectedAction = {
      type: actionTypes.SHOW_ANIMATION,
      showAnimation: true
    };

    expect(actions.animate(true))
    .toEqual(expectedAction);
  });

  
});