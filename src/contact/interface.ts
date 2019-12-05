import Contact from "../form/Contact";

export interface IContact extends Contact {}

export interface IContacts extends Array<IContact> {}

export interface ICompany {
    name: string;
    address: string;
}

export interface ICompanies extends Array<ICompany> {}
