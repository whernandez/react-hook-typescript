
export interface IContact {
    name: string;
    email: string;
}

export interface IContacts extends Array<IContact> {}

export interface ICompany {
    name: string;
    address: string;
}

export interface ICompanies extends Array<ICompany> {}
