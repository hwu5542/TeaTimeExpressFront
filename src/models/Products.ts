export class Products {
    constructor (
        public productId:number,
        public productName:string,
        public productDescription:string,
        public productImage:string,
        public productListImage:string,
        public productPrice:number,
        public productWeight:number,
        public productStockAmt:number,
        public productOrderAmt:number,
    ) {}
}

export const emptyProduct = new Products(0, '', '', 'teaImage', 'teaListImage', 0, 0, 0, 0);