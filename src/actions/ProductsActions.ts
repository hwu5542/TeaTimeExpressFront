import { createAsyncThunk } from "@reduxjs/toolkit"
import { Products } from "../models/Products"
import { ApiListProducts, ApiUpdateProducts } from "../remote/SpringApi"

export enum ProductsActionTypes {
    NEW_PRODUCT = 'products/new',
    SET_PRODUCT = 'products/set',
    // GET_PRODUCT = 'products/get',
    GET_PRODUCT_LIST = 'products/getAll',
    UPDATE_PRODUCT = 'products/update'
}

export const newProduct = (newProduct:Products) => {
    return {
        type:ProductsActionTypes.NEW_PRODUCT,
        payload:newProduct
    }
}

export const setProduct = (allProducts:string[], productId:number) => {
    return {
        type:ProductsActionTypes.SET_PRODUCT,
        payload:allProducts[(productId>0? productId-1: 0)]
    }
}

// export const searchProductsAsync = createAsyncThunk(
//     ProductsActionTypes.GET_PRODUCT,
//     async (productId:number) => {
//         const product = await ApiSearchProducts(productId);
//         if (typeof product === 'object') return product;
//     }
// )

export const listProductsAsync = createAsyncThunk(
    ProductsActionTypes.GET_PRODUCT_LIST,
    async () => {
        const productsList = await ApiListProducts();
        if (Array.isArray(productsList)) return productsList;
    }
)

export const updateProductsAsync = createAsyncThunk(
        ProductsActionTypes.UPDATE_PRODUCT,
        async (products:Products[]) => {
            const productsList = await ApiUpdateProducts(products);
            if (typeof productsList === 'object') return productsList;
        }
    )