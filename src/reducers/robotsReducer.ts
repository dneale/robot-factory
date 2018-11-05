import actionTypes from '../actions/actions';

const initialState = {
  data: []
};

const robotsReducer = (state = initialState, action : any) => {
  if (action.type === actionTypes.FETCH_ROBOTS_FULFILLED) {
    return {
      ...state,
      data: action.payload
    };
  }
  return state;
};

export default robotsReducer;
