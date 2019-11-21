import {createSelector} from 'reselect';
import {CompanyStateI} from "./reducer";
import {CompanyI} from "./interface";

const getCompany = (state : CompanyStateI) : CompanyI => {
    return state.company;
};

export const getCompanySelector = createSelector(getCompany,
    (company) => company
)
