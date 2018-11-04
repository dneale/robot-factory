export const fetchRobots = (request = fetch) => {
  return {
    type: 'FETCH_ROBOTS',
    payload: request('/robots', {method: 'GET'})
  }
}