import { Cart, emptyCart } from "./Cart";
import { emptyProduct, Products } from "./Products";
import { emptyUser, Users } from "./Users";

export class Orders{
    constructor(
        public orderNumber:number,
        public orderUserId:Users,
        public orderTotal:number,
        public orderDescription:string,
        public orderTime:string,
        public orderCart:Cart
    ) {}
}

export const emptyOrder = new Orders(0, emptyUser, 0, '', '', emptyCart); 