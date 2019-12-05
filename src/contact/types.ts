import {IContacts, IContact} from "./interface";
import {createTypes} from "../core/config/redux/helperTypes";
import Contact from "../form/Contact";

// Types
export const FETCH_CONTACT = createTypes('FETCH_CONTACT');
export const CREATE_CONTACT = createTypes('CREATE_CONTACT');
export const SET_CONTACT = 'SET_CONTACT';
export const FETCH_CONTACTS = 'FETCH_CONTACTS';

/* Types actions */
type TSetContactNameAction = {
    type: typeof SET_CONTACT
    payload: string
}

type TFetchContactAction = {
    type: typeof FETCH_CONTACT.WATCHER,
    payload?: IContact
}

interface ICreateContactAction {
    type: typeof CREATE_CONTACT.WATCHER | typeof CREATE_CONTACT.SUCCESS
    payload: Contact
}

interface IFetchContactAction {
    type: typeof FETCH_CONTACTS,
    payload: IContacts,
}

export type ContactActionTypes =
    ICreateContactAction |
    IFetchContactAction |
    TSetContactNameAction |
    TFetchContactAction;


