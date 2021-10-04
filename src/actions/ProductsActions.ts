import { createAsyncThunk } from "@reduxjs/toolkit"
import { Inventory } from "../models/Inventory"
import { Products } from "../models/Products"
import { ApiListProducts, ApiSearchProducts } from "../remote/SpringApi"

export enum ProductsActionTypes {
    NEW_PRODUCT = 'products/new',
    GET_PRODUCT = 'products/get',
    GET_PRODUCT_LIST = 'products/getAll',
    ADD_INVENT = 'products/addinvent',
    SET_INVENT = 'products/setinvent'
}

export type ProductsActionNew = {
    type:ProductsActionTypes.NEW_PRODUCT,
    payload?:Products
}

export type ProductsActionAddInvent = {
    type:ProductsActionTypes.ADD_INVENT,
    payload?:Inventory
}

export type ProductsActionSetInvent = {
    type:ProductsActionTypes.SET_INVENT,
    payload?:Inventory
}

export type ProductsAction = ProductsActionNew | ProductsActionAddInvent | ProductsActionSetInvent;

export const newProduct = (newProduct:Products) => {
    return {
        type:ProductsActionTypes.NEW_PRODUCT,
        payload:newProduct
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

export const searchProductsAsync = createAsyncThunk(
    ProductsActionTypes.GET_PRODUCT,
    async (productsId:number) => {
        const product = await ApiSearchProducts(productsId);
        if (typeof product === 'object') return product;
    }
)

export const listProductsAsync = createAsyncThunk(
    ProductsActionTypes.GET_PRODUCT_LIST,
    async () => {
        const product = await ApiListProducts();
        if (Array.isArray(product)) return product;
    }
)