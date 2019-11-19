import * as types from './types';
import {CompaniesI, CompanyI} from "./interface";

interface CompanyStateI {
    companies?: CompaniesI,
    company?: CompanyI
}

const initialState : CompanyStateI = {
    companies: [],
    company: {
        name: '',
        phone: ''
    }
};

export default function companyReducer(
    state = initialState,
    action: types.CompanyActionTypes
): CompanyStateI {
    switch (action.type) {
        case types.CREATE_COMPANY:
            return {
                company: {...state.company, ...action.payload}
            };
        case types.FETCH_COMPANIES:
            return {
                companies: [...state.companies, ...action.payload]
            };
        default:
            return state
    }
}
