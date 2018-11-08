import actionTypes from '../actions/actions';

interface IState {
  data: any[];
  extinguished: any[];
  recycled?: any[]
}
const initialState = {
  data: [],
  extinguished: [],
  recycled: []
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
      data: state.data.map((robot: any) => {
        if (robot.id === action.payload.id) {
          return action.payload
        }
        return robot;
      }),
      extinguished: [
        ...state.extinguished,
        action.payload
      ]
    };
  }
  if (action.type === actionTypes.RECYCLE_ROBOTS_FULFILLED) {
    return {
      ...state,
      data: state.data.reduce((acc: any[], robot) => {
        if (!action.meta.includes(robot.id)) {
          acc.push(robot);
        }
        return acc;
      }, []),
      recycled: action.meta
    };
  }
  return state;
};

export default robotsReducer;
