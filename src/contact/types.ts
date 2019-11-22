import {IContacts, IContact} from "./interface";

// Types
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const SET_CONTACT = 'SET_CONTACT';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';

/* Types actions */
type TSetContactNameAction = {
    type: typeof SET_CONTACT
    payload: string
}

interface ICreateContactAction {
    type: typeof CREATE_CONTACT
    payload: IContact
}

interface IFetchContactAction {
    type: typeof FETCH_CONTACTS,
    payload: IContacts,
}

export type ContactActionTypes = ICreateContactAction | IFetchContactAction | TSetContactNameAction;


