/**
 * store application
 * This file helps the application to communicate with all the components
 * store is an object that maintains a shared state for all applications and acts as an intermediary between the components
 * The store can be access from whatever places in the application
 * To works needs 4 functions: subscribe, dispatch, getState and reducer
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../historyBrowser';
import createRootReducer from './reducers';
//import "regenerator-runtime/runtime";
//import createSagaMiddleware from "redux-saga";
//import { combinedSagas } from "./sagas";

// const logger = store => next => action => {
//     // console.log('dispatching', action);
//     let result = next(action);
//     // console.log('next state', store.getState());
//     return result;
// };

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createRootReducer(history), // new root reducer with router state,
    composeEnhancers()
);

/*export default function configureStore(initialState) {
    const store = createStore(createRootReducer(history), initialState,
        enhancer);
    const persistor = persistStore(store);
    // run the sagas
    combinedSagas(sagaMiddleware);
    return {store, persistor};
}*/



export default store;
