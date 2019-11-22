import * as types from './types';
import {IContacts, IContact} from "./interface";

export interface ContactStateI {
    contacts: IContacts,
    contact: IContact
}

const initialState : ContactStateI = {
    contacts: [],
    contact: {
        name: '',
        email: ''
    }
};

export function contactReducer(
    state = initialState,
    action: types.ContactActionTypes
) {
    switch (action.type) {
        case types.SET_CONTACT:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    name: action.payload
                }
            };
        case types.CREATE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case types.FETCH_CONTACTS:
            return state.contacts;
        default:
            return state
    }
}
