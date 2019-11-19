import * as types from './types';
import {CompaniesI, CompanyI} from "./interface";

// TypeScript infers that this function is returning CreateCompanyActionI
/**
 * @param newCompany
 * @return CreateCompanyActionI
 */
export function createCompany(newCompany : CompanyI): types.CompanyActionTypes {
    return {
        type: types.CREATE_COMPANY,
        payload: newCompany
    }
}

// TypeScript infers that this function is returning FetchCompaniesActionI
/**
 * @return FetchCompaniesActionI
 */
export function fetchCompanies(companies : CompaniesI): types.CompanyActionTypes {
    return {
        type: types.FETCH_COMPANIES,
        payload: companies
    }
}
