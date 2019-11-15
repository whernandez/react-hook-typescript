
export interface IContact {
    fullName?: string;
    phone?: string;
}

export interface IContacts extends Array<IContact> {}

export interface ICompany {
    name: string;
    phone: string;
}
