export interface IUsers {
    address: IAddress;
    company: {
        name: string;
    }
    email: string;
    name: string;
    username: string;
    id: number;
    phone: string;
    website: string;
}

interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUsersInput {
    address: IAddress;
    email: string;
    name: string;
    username: string;
    phone: string;
    website: string;
}
