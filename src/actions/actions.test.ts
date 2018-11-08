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
  });
  describe('extinguishRobot', () => {
    it('should call the extinguish robot endpoint for the given robot', () => {
        const mockPromise = new Promise((res)  => res());
        const mockRequest = jest.fn().mockReturnValue(mockPromise);
        const action = actions.extinguishRobot(1, mockRequest);

        expect(mockRequest).toHaveBeenCalledWith('/robots/1/extinguish.json', {method: 'GET'})

        expect(action).toEqual({
          type: actionTypes.EXTINGUISH_ROBOT,
          payload: mockPromise
        })
    });
  });
  describe('recycleRobots', () => {
    it('should call the recycle robot endpoint with the given robot ids', () => {
        const mockPromise = new Promise((res)  => res());
        const mockRequest = jest.fn().mockReturnValue(mockPromise);
        const action = actions.recycleRobots([1, 2, 3], mockRequest);

        expect(mockRequest).toHaveBeenCalledWith(
          '/robots/recycle.json',
          {
            method: 'POST',
            body: JSON.stringify([1,2,3])
          }
        );

        expect(action).toEqual({
          type: actionTypes.RECYCLE_ROBOTS,
          payload: mockPromise,
          meta: [1,2,3]
        })
    });
  })
})