import {promiseActionTypes} from './helpers';

const actionTypes = {
  ...promiseActionTypes('FETCH_ROBOTS'),
  ...promiseActionTypes('EXTINGUISH_ROBOT')
}

export const fetchRobots = (request = fetch) => ({
    type: actionTypes.FETCH_ROBOTS,
    payload: request('/robots', {method: 'GET'}).then(response => response.json())
});

export const extinguishRobot = (id: number, request = fetch) => ({
  type: actionTypes.EXTINGUISH_ROBOT,
  payload: request(
    `/robots/${id}/extinguish.json`,
    {method: 'GET'})
      .then(response => response.json())
});

export default actionTypes;