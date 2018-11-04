import { promiseActionTypes } from './helpers';

describe('promiseActionTypes', () => {
  it('should return the promise action types with the correct suffixes', () => {
    const actionTypes = promiseActionTypes('MOCK_ACTION');

    expect(actionTypes).toEqual({
      MOCK_ACTION: 'MOCK_ACTION',
      MOCK_ACTION_PENDING: 'MOCK_ACTION_PENDING',
      MOCK_ACTION_FULFILLED: 'MOCK_ACTION_FULFILLED',
      MOCK_ACTION_REJECTED: 'MOCK_ACTION_REJECTED',
    });
  });
});
