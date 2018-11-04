import { combineReducers } from 'redux';
import robotsReducer from './robotsReducer';

const combinedReducers = combineReducers({
  robots: robotsReducer
});

export default combinedReducers;
