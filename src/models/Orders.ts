import { Cart } from "./Cart";

export class Orders{
    constructor(
        public orderNumber:number,
        public orderTotal:number,
        public orderDescription:string,
        public orderTime:string,
        public orderCart:Cart[]
    ) {}
}
export const emptyOrder = new Orders(0, 0, '', '', []); 