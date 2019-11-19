import {CompaniesI, CompanyI} from "./interface";

// Types
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const FETCH_COMPANIES = 'FETCH_COMPANIES';

// Types actions
interface CreateCompanyActionI {
    type: typeof CREATE_COMPANY
    payload: CompanyI
}

interface FetchCompaniesActionI {
    type: typeof FETCH_COMPANIES,
    payload: CompaniesI,
}

export type CompanyActionTypes = CreateCompanyActionI | FetchCompaniesActionI;


