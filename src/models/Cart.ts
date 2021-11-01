import { Orders } from "./Orders";

export class Cart{
    constructor(
        public cartId:number,
        public productName:string,
        public productNumber:number,
        public orderAmount:number,
        public orderPrice:number
    ) {}
}

export const emptyCart = new Cart(0, '', 0, 0, 0);