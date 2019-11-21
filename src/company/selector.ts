import {createSelector} from 'reselect';
import {companyReducer, CompanyStateI} from "./reducer";
import {CompaniesI, CompanyI} from "./interface";

const getCompany = (state : any) : CompanyStateI => {
    return state.companyReducer.company;
};

export const getCompanySelector = createSelector(getCompany,
    (company) => company
)
