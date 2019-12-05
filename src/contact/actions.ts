import * as types from './types';
import {IContacts, IContact} from "./interface";
import Contact from "../form/Contact";

/**
 * @param name
 * @return ContactActionTypes
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
 * @return ContactActionTypes
 */
export function createContact(newContact : Contact): types.ContactActionTypes {
    return {
        type: types.CREATE_CONTACT.WATCHER,
        payload: newContact
    }
}

// TypeScript infers that this function is returning FetchCompanyActionI
/**
 * @return ContactActionTypes
 */
export function fetchContact(): types.ContactActionTypes {
    return {
        type: types.FETCH_CONTACT.WATCHER
    }
}

// TypeScript infers that this function is returning FetchCompaniesActionI
/**
 * @return ContactActionTypes
 */
export function fetchContacts(contacts : IContacts): types.ContactActionTypes {
    return {
        type: types.FETCH_CONTACTS,
        payload: contacts
    }
}
