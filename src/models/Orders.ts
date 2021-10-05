export class Orders{
    constructor(
        public orderNumber:number,
        public productNumber:number,
        public orderUserId:number,
        public orderAmount:number,
        public orderDescription:string,
        public orderTime:string
    ) {}
}