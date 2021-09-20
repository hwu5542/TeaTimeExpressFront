import { ActionCreator } from "redux";
import { Orders } from "../models/Orders";

export enum OrdersActionTypes {
    NEW_ORDER = 'orders/new',
    CANCEL_ORDER = 'orders/cancel',
    DELETE_ORDER = 'orders/delete'
}

export type OrdersActionNew = {
    type:OrdersActionTypes.NEW_ORDER,
    payload?:Orders
}

export type OrdersActionCancel = {
    type:OrdersActionTypes.CANCEL_ORDER,
    payload?:number
}

export type OrdersActionDelete = {
    type:OrdersActionTypes.DELETE_ORDER,
    payload?:number[]
}

export type OrdersAction = OrdersActionNew | OrdersActionCancel | OrdersActionDelete;

export const newOrder = (order:Orders) => {
    return {
        type:OrdersActionTypes.NEW_ORDER,
        payload:order    
    }
}

export const cancelOrder = (order_number:number) => {
    return {
        type:OrdersActionTypes.CANCEL_ORDER,
        payload:order_number
    }
}

export const deleteOrder = (order_number:number[]) => {
    return {
        type:OrdersActionTypes.DELETE_ORDER,
        payload:order_number
    }
}