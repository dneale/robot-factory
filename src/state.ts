import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import combinedReducers from './reducers';

const store = createStore(combinedReducers, {}, compose(
  applyMiddleware(
    promiseMiddleware(),
  ),
));

export default store;
