import { Addresses, emptyAddress } from "./Addresses";
import { emptyOrder, Orders } from "./Orders";

export class Users {
    constructor (
        public userId:number,
        public userUsername:string,
        public userPassword:string,
        public userLastName:string,
        public userFirstName:string,
        public userEmail:string,
        public userPhoneNumber:string,
        public userImage:string,
        public userBillAddress:Addresses,
        public userMailAddress:Addresses[],
        public userOrders:Orders[]
    ) {}
}

export const emptyUser = new Users(0, "", "", "", "", "", "", "", emptyAddress, [emptyAddress], [emptyOrder])