import { ActionCreator } from "redux"
import { Inventory } from "../models/Inventory"
import { Products } from "../models/Products"

export enum ProductsActionTypes {
    NEW_PRODUCT = 'products/new',
    GET_PRODUCT = 'products/get',
    ADD_INVENT = 'products/addinvent',
    SET_INVENT = 'products/setinvent'
}

export type ProductsActionNew = {
    type:ProductsActionTypes.NEW_PRODUCT,
    payload:Products
}

export type ProductsActionGet = {
    type:ProductsActionTypes.GET_PRODUCT
}

export type ProductsActionAddInvent = {
    type:ProductsActionTypes.ADD_INVENT,
    payload:Inventory
}

export type ProductsActionSetInvent = {
    type:ProductsActionTypes.SET_INVENT,
    payload:Inventory
}

export type ProductsAction = {

}

export const newProduct:ActionCreator<ProductsActionNew> = (newProduct:Products) => {
    return {
        type:ProductsActionTypes.NEW_PRODUCT,
        payload:newProduct
    }
}

export const getProduct:ActionCreator<ProductsActionGet> = () => {
    return {
        type:ProductsActionTypes.GET_PRODUCT
    }
}

export const addInventory:ActionCreator<ProductsActionAddInvent> = (inventInc:Inventory) => {
    return {
        type:ProductsActionTypes.ADD_INVENT,
        payload:inventInc
    }
}

export const setInventory:ActionCreator<ProductsActionSetInvent> = (inventSet:Inventory) => {
    return {
        type:ProductsActionTypes.SET_INVENT,
        payload:inventSet
    }
}