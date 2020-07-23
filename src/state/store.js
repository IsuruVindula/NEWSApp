// all the redux configuration is done here

import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'; //support for API calls
import logger from 'redux-logger'; //login tool
import rootReducer from './root.reducer'; //set all the state functions work together
import rootSaga from './root.saga';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(logger)),
);

// sagaMiddleware.run(rootSaga); 

export default store;