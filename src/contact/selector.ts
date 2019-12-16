import {createSelector} from 'reselect';
import Contact from "../form/Contact";

const getContact = (state : any) : Contact => {
    return state.contactReducer.contact;
};

const getContacts = (state : any) : Array<Contact> => {
    return state.contactReducer.contacts;
};

export const getContactSelector = createSelector(getContact,
    (contact) : Contact => contact
);

export const getContactsSelector = createSelector(getContacts,
    (contacts) : Array<Contact> => contacts
);
