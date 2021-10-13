import { Addresses } from "./Addresses";

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
    ) {}
}