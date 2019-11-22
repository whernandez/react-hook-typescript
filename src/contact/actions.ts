import * as types from './types';
import {IContacts, IContact} from "./interface";

/**
 * @param name
 */
export function setContactName(name : string) : types.ContactActionTypes {
    return {
        type: types.SET_CONTACT,
        payload: name
    }
}

// TypeScript infers that this function is returning CreateCompanyActionI
/**
 * @param newContact
 * @return CreateCompanyActionI
 */
export function createContact(newContact : IContact): types.ContactActionTypes {
    return {
        type: types.CREATE_CONTACT,
        payload: newContact
    }
}

// TypeScript infers that this function is returning FetchCompaniesActionI
/**
 * @return FetchCompaniesActionI
 */
export function fetchContacts(contacts : IContacts): types.ContactActionTypes {
    return {
        type: types.FETCH_CONTACTS,
        payload: contacts
    }
}
