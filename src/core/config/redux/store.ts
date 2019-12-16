/**
 * store application
 * This file helps the application to communicate with all the components
 * store is an object that maintains a shared state for all applications and acts as an intermediary between the components
 * The store can be access from whatever places in the application
 * To works needs 4 functions: subscribe, dispatch, getState and reducer
 */
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import history from '../historyBrowser';
import combineReducers from './reducers';
//import "regenerator-runtime/runtime";
import createSagaMiddleware from "redux-saga";
import {combinedSagas} from "./sagas";
//import { combinedSagas } from "./sagas";

// const logger = store => next => action => {
//     // console.log('dispatching', action);
//     let result = next(action);
//     // console.log('next state', store.getState());
//     return result;
// };

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
    combineReducers(history), // new root reducer with router state,
    composeWithDevTools(middleWareEnhancer)
);

/*export default function configureStore(initialState) {
    const store = createStore(createRootReducer(history), initialState,
        enhancer);
    const persistor = persistStore(store);
    // run the sagas
    combinedSagas(sagaMiddleware);
    return {store, persistor};
}*/

combinedSagas(sagaMiddleware);

export default store;
