import * as types from './types';
import {plainToClass} from "class-transformer";
import {IContacts, IContact} from "./interface";
import Contact from "../form/Contact";

export interface IContactState {
    contacts: IContacts,
    contact: IContact
}

const firstContact = new Contact('First Contact', 'first@contact.com');

const initialState : IContactState = {
    contacts: [firstContact],
    contact: firstContact
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
        case types.CREATE_CONTACT.SUCCESS:
            return {
                ...state,
                contacts: [...state.contacts, plainToClass(Contact, action.payload)]
            };
        default:
            return state
    }
}
