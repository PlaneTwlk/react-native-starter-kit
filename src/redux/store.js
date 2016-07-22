import reducers from "./reducer";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import rootSagas from '../sagas/';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const middleware = __DEV__ ? [sagaMiddleware, logger] : [sagaMiddleware];

const createStoreWithMiddleware = createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSagas);

export default createStoreWithMiddleware;
