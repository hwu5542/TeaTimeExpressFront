import internal from "stream";

export class Orders{
    constructor(
        public order_number:number,
        public product_number:number,
        public order_user_id:number,
        public order_amount:number,
        public order_description:number,
        public orser_time:String
    ) {}
}