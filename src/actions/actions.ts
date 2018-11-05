import {promiseActionTypes} from './helpers';

const actionTypes = {
  ...promiseActionTypes('FETCH_ROBOTS')
}

export const fetchRobots = (request = fetch) => ({
    type: actionTypes.FETCH_ROBOTS,
    payload: request('/robots', {method: 'GET'}).then(response => response.json())
});

export default actionTypes;