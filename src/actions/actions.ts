import {promiseActionTypes} from './helpers';

const actionTypes = {
  ...promiseActionTypes('FETCH_ROBOTS'),
  ...promiseActionTypes('EXTINGUISH_ROBOT'),
  ...promiseActionTypes('RECYCLE_ROBOTS')
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

export const recycleRobots = (ids: number[], request = fetch) => ({
  type: actionTypes.RECYCLE_ROBOTS,
  payload: request(
    `/robots/recycle.json`,
    {
      method: 'POST',
      body: JSON.stringify(ids),
    })
    .then(response => response.json()),
  meta: ids
});

export default actionTypes;