import { Cart, emptyCart } from "./Cart";
import { emptyUser, Users } from "./Users";

export class Orders{
    constructor(
        public orderNumber:number,
        public orderTotal:number,
        public orderDescription:string,
        public orderTime:string,
        public orderCart:Cart
    ) {}
}
export const emptyOrder = new Orders(0, 0, '', '', emptyCart); 