export class Products {
    constructor (
        public product_number:number,
        public product_name:String,
        public product_weight:number,
        public product_description:String,
        public product_stock_amt:number,
        public product_order_amt:number,
        public product_image:String
    ) {}
}