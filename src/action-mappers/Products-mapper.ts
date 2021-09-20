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
    payload?:Products
}

export type ProductsActionGet = {
    type:ProductsActionTypes.GET_PRODUCT,
    payload?:Inventory
}

export type ProductsActionAddInvent = {
    type:ProductsActionTypes.ADD_INVENT,
    payload?:Inventory
}

export type ProductsActionSetInvent = {
    type:ProductsActionTypes.SET_INVENT,
    payload?:Inventory
}

export type ProductsAction = ProductsActionNew | ProductsActionGet | ProductsActionAddInvent | ProductsActionSetInvent;

export const newProduct = (newProduct:Products) => {
    return {
        type:ProductsActionTypes.NEW_PRODUCT,
        payload:newProduct
    }
}

export const getProduct = (inventDec:Inventory) => {
    return {
        type:ProductsActionTypes.GET_PRODUCT,
        payload:inventDec
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