import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionCreator } from "redux";
import { Cart } from "../models/Cart";
import { Orders } from "../models/Orders";
import { ApiCreateOrders, ApiListOrders, ApiSearchOrders } from "../remote/SpringApi";

export enum OrdersActionTypes {
    NEW_ORDER = 'orders/new',
    CANCEL_ORDER = 'orders/cancel',
    DELETE_ORDER = 'orders/delete',
    GET_ORDER = 'orders/get',
    GET_ORDER_LIST = 'orders/getAll'
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

export const searchOrdersAsync = createAsyncThunk(
    OrdersActionTypes.GET_ORDER,
    async (ordersId:number) => {
        const order = await ApiSearchOrders(ordersId);
        if (typeof order === 'object') return order;
    }
)

export const listOrdersAsync = createAsyncThunk(
    OrdersActionTypes.GET_ORDER_LIST,
    async () => {
        const orders = await ApiListOrders();
        if (Array.isArray(orders)) return orders;
    }
)

export const createOrdersAsync = createAsyncThunk(
    OrdersActionTypes.NEW_ORDER,
    async (cart:Cart[]) => {
        const orders = await ApiCreateOrders(cart);
        if (typeof orders === 'object') return orders;
    }
)