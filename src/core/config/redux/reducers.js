/**
 * combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore
 * We can separate the reducers in parts, where every part has it task, then after we use the combineReducers to join and send to createStore
 */
import { combineReducers }  from 'redux';

// TODO: App reducers
import {contactReducer} from '../../../contact/reducer';

export default (history) => combineReducers({
    contactReducer
});


