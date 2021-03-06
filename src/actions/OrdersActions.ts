import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiListOrders, ApiSearchOrders } from "../remote/SpringApi";

export enum OrdersActionTypes {
    NEW_ORDER = 'orders/new',
    CANCEL_ORDER = 'orders/cancel',
    DELETE_ORDER = 'orders/delete',
    GET_ORDER = 'orders/get',
    GET_ORDER_LIST = 'orders/getAll'
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