import {all, put, takeLatest} from "redux-saga/effects";
import * as types from './types';
import {fetchContactService} from "./service";

/**
 * Fetch contact
 * @param action
 * @returns {IterableIterator<PutEffect<*|{type: *}>|CallEffect>}
 */
function* fetchContact(action : types.ContactActionTypes) {

    try {
        fetchContactService();
        yield put({type: types.CREATE_CONTACT.SUCCESS, payload: action.payload});
    } catch (error) {
        // dispatch a failure action to the store with the error
        console.log(error)
    }
}

/**
 * Create contact
 * @param action
 * @returns {IterableIterator<PutEffect<*|{type: *}>|CallEffect>}
 */
function* createContact(action : types.ContactActionTypes) {

    try {
        yield put({type: types.CREATE_CONTACT.SUCCESS, payload: action.payload});
    } catch (error) {
        // dispatch a failure action to the store with the error
        console.log(error)
    }
}

export default function* saga() {
    yield all([
        yield takeLatest<types.ContactActionTypes>(types.CREATE_CONTACT.WATCHER, createContact),
        yield takeLatest<types.ContactActionTypes>(types.FETCH_CONTACT.WATCHER, fetchContact),
    ])
}
