
export interface ContactI {
    fullName?: string;
    phone?: string;
}

export interface ContactsI extends Array<ContactI> {}

export interface CompanyI {
    name: string;
    phone: string;
}

export interface CompaniesI extends Array<CompanyI> {}
