import actionTypes from '../actions/actions';

interface IState {
  data: any[];
  extinguished: any[];
}
const initialState = {
  data: [],
  extinguished: []
};

const robotsReducer = (state:IState = initialState, action : any) => {
  if (action.type === actionTypes.FETCH_ROBOTS_FULFILLED) {
    return {
      ...state,
      data: action.payload
    };
  }
  if (action.type === actionTypes.EXTINGUISH_ROBOT_FULFILLED) {
    return {
      ...state,
      extinguished: [
        ...state.extinguished,
        action.payload
      ]
    };
  }
  return state;
};

export default robotsReducer;
