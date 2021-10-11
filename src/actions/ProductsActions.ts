import { createAsyncThunk } from "@reduxjs/toolkit"
import { Inventory } from "../models/Inventory"
import { Products } from "../models/Products"
import { ApiListProducts } from "../remote/SpringApi"

export enum ProductsActionTypes {
    NEW_PRODUCT = 'products/new',
    SET_PRODUCT = 'products/set',
    // GET_PRODUCT = 'products/get',
    GET_PRODUCT_LIST = 'products/getAll',
    ADD_INVENT = 'products/addinvent',
    SET_INVENT = 'products/setinvent'
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

export const addInventory = (inventInc:Inventory) => {
    return {
        type:ProductsActionTypes.ADD_INVENT,
        payload:inventInc
    }
}

export const setInventory = (inventSet:Inventory) => {
    return {
        type:ProductsActionTypes.SET_INVENT,
        payload:inventSet
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
        const product = await ApiListProducts();
        if (Array.isArray(product)) return product;
    }
)