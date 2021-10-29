export class Cart{
    constructor(
        public productName:string,
        public productNumber:number,
        public orderAmount:number,
        public orderPrice:number
    ) {}
}

export const emptyCart = new Cart('', 0, 0, 0);