import * as actions from './qaActions';

describe('qaActions', () => {
  describe('fetchRobots', () => {
    it('should fetch list of robots', () => {
        const mockRequest = jest.fn().mockReturnValue('request');
        const action = actions.fetchRobots(mockRequest);

        expect(mockRequest).toHaveBeenCalledWith('/robots', {method: 'GET'})

        expect(action).toEqual({
          type: 'FETCH_ROBOTS',
          payload: 'request'
        })
    });
  })
})