import actionTypes, * as actions from './actions';

describe('actions', () => {
  describe('fetchRobots', () => {
    it('should fetch list of robots', () => {
        const mockPromise = new Promise((res)  => res());
        const mockRequest = jest.fn().mockReturnValue(mockPromise);
        const action = actions.fetchRobots(mockRequest);

        expect(mockRequest).toHaveBeenCalledWith('/robots', {method: 'GET'})

        expect(action).toEqual({
          type: actionTypes.FETCH_ROBOTS,
          payload: mockPromise
        })
    });
  })
})