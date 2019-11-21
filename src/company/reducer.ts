import * as types from './types';
import {CompaniesI, CompanyI} from "./interface";

export interface CompanyStateI {
    companies: CompaniesI,
    company: CompanyI
}

const initialState : CompanyStateI = {
    companies: [],
    company: {
        name: '',
        phone: ''
    }
};

export function companyReducer(
    state = initialState,
    action: types.CompanyActionTypes
) {
    switch (action.type) {
        case types.CREATE_COMPANY:
            return {...state.company, ...action.payload};
        case types.FETCH_COMPANIES:
            return [...state.companies, ...action.payload];
        default:
            return state
    }
}
