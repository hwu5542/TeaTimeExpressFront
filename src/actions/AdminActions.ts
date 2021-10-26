import { createAsyncThunk } from "@reduxjs/toolkit"
import { Inventory } from "../models/Inventory"
import { Products } from "../models/Products"
import { UserCredential } from "../models/UserCredential"
import { ApiListAccounts, ApiListProducts } from "../remote/SpringApi"

export enum AdminActionTypes {
    ADMIN_ACCOUNTS_LIST = 'admin/accounts',
    ADMIN_ORDERS_LIST = 'admin/orders'
}

// export const setInventory = (inventSet:Inventory) => {
//     return {
//         type:ProductsActionTypes.SET_INVENT,
//         payload:inventSet
//     }
// }

// export const searchProductsAsync = createAsyncThunk(
//     ProductsActionTypes.GET_PRODUCT,
//     async (productId:number) => {
//         const product = await ApiSearchProducts(productId);
//         if (typeof product === 'object') return product;
//     }
// )

export const listAccountsAsync = createAsyncThunk(
    AdminActionTypes.ADMIN_ACCOUNTS_LIST,
    async (adminCredential:UserCredential) => {
        const accounts = await ApiListAccounts(adminCredential);
        if (Array.isArray(accounts)) return accounts;
    }
)