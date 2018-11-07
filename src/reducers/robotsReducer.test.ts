import actionTypes from '../actions/actions';
import robotsReducer from './robotsReducer';

describe('robotsReducer', () => {
  describe('when robots successfully fetched', () => {
    it('should save robots', () => {
      const action = { type: actionTypes.FETCH_ROBOTS_FULFILLED, payload: ['fetch action'] };

      const initialState = { data: [], extinguished: [] };
      const expectedState = { data: ['fetch action'], extinguished: [] };

      expect(robotsReducer(initialState, action)).toMatchObject(expectedState);
    });
  });

  describe('when robots is extinguished', () => {
    it('should put robot in extinguished list', () => {
      const action = { type: actionTypes.EXTINGUISH_ROBOT_FULFILLED, payload:'robot now' };

      const initialState = { data: [], extinguished: ['robot earlier'] };
      const expectedState = { data: [], extinguished: ['robot earlier', 'robot now']};

      expect(robotsReducer(initialState, action)).toMatchObject(expectedState);
    });
  });
});
