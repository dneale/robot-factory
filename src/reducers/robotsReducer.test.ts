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

  describe('when robot is extinguished', () => {
    it('should put robot in extinguished list', () => {
      const action = { type: actionTypes.EXTINGUISH_ROBOT_FULFILLED, payload:'robot now' };
      const initialState = { data: [], extinguished: [] };

      expect(robotsReducer(initialState, action).extinguished).toMatchObject(['robot now']);
    });

    it('should update relevant robot in the data list', () => {
      const action = { type: actionTypes.EXTINGUISH_ROBOT_FULFILLED, payload:{id: 1, statuses: []} };

      const initialState = { data: [{id: 1, statuses: ['on fire']}], extinguished: ['robot earlier'] };
      const expectedState = { data: [{id: 1, statuses: []}], extinguished: ['robot earlier', {id: 1, statuses: []}]};

      expect(robotsReducer(initialState, action)).toMatchObject(expectedState);
    });
  });

  describe('when robots are recycled', () => {
    it('should put recycled robot ids in recycled list', () => {
      const action = { type: actionTypes.RECYCLE_ROBOTS_FULFILLED, payload:'', meta: [1,2,3] };

      const initialState = { data: [], extinguished: [], recycled: [] };
      const expectedState = { data: [], extinguished: [], recycled: [1,2,3]};

      expect(robotsReducer(initialState, action)).toMatchObject(expectedState);
    });
    it('should remove robots in data list', () => {
      const action = { type: actionTypes.RECYCLE_ROBOTS_FULFILLED, payload:'', meta: [1] };

      const initialState = { data: [{id: 1}, {id: 2}], extinguished: [], recycled: [] };
      const expectedState = { data: [{id: 2}], extinguished: [], recycled: [1]};

      expect(robotsReducer(initialState, action)).toMatchObject(expectedState);
    });
  });
});
