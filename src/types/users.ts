export interface IUsers {
    address: IAddress;
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
