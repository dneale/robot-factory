import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import combinedReducers from './reducers';

const windowIfDefined = typeof window === 'undefined' ? null : window as any;

const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducers, {}, composeEnhancers(
  applyMiddleware(
    promiseMiddleware(),
  ),
));

export default store;
