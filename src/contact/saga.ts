import React from 'react';
import {all, call, cps, delay, put, select, takeLatest} from "redux-saga/effects";
import * as types from './types';

/**
 * Create contact
 * @param action
 * @returns {IterableIterator<PutEffect<*|{type: *}>|CallEffect>}
 */
function* createContact(action : types.ContactActionTypes) {

    try {
        yield delay(10); // For user experience only
        console.log(action);
    } catch (error) {
        // dispatch a failure action to the store with the error
        console.log(error)
    }
}

export default function* saga() {
    yield all([
        yield takeLatest<types.ContactActionTypes>(types.CREATE_CONTACT, createContact),
    ])
}
