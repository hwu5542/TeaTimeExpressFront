import { emptyProduct, Products } from "./Products";
import { emptyUser, Users } from "./Users";

export class Orders{
    constructor(
        public orderNumber:number,
        public productNumber:Products,
        public orderUserId:Users,
        public orderAmount:number,
        public orderDescription:string,
        public orderTime:string
    ) {}
}

export const emptyOrder = new Orders(0, emptyProduct, emptyUser, 0, "", "");