import {createSelector} from 'reselect';
import {IContact, IContacts} from "./interface";

const getContact = (state : any) : IContact => {
    return state.contactReducer.contact;
};

const getContacts = (state : any) : IContacts => {
    return state.contactReducer.contacts;
};

export const getContactSelector = createSelector(getContact,
    (contact) : IContact => contact
);

export const getContactsSelector = createSelector(getContacts,
    (contacts) : IContacts => contacts
);
