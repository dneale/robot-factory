import actionTypes from '../actions/actions';
import robotsReducer from './robotsReducer';

describe('robotsReducer', () => {
  describe('when robots successfully fetched', () => {
    it('should save robots', () => {
      const action = { type: actionTypes.FETCH_ROBOTS_FULFILLED, payload: 'fetch action' };

      const initialState = { data: [] };
      const expectedState = { data: 'fetch action'};

      expect(robotsReducer(initialState, action)).toMatchObject(expectedState);
    });
  });
});
