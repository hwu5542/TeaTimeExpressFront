import { createSlice } from "@reduxjs/toolkit";
import { cancelOrder, deleteOrder, newOrder } from "../actionMappers/OrdersMapper";
import { Orders } from "../models/Orders";
import { RootState } from "../store/store";

export interface ordersState {
    orders: Orders;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:ordersState = {
    orders : new Orders(0, 0, 0, 0, 0, ""),
    status : 'idle'
}

const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        newOrderAction:(state) => {state.orders = newOrder(state.orders).payload}
        // cancelOrderAction:(state) => {state.orders = cancelOrder(state.orders.order_number).payload}
        // deleteOrderAction:(state) => {state.orders = deleteOrder(state.orders)}
    },
    extraReducers:{}
})

export const { newOrderAction } = ordersSlice.actions;

export const selectOrders = (state:RootState) => (state.orders)

export default ordersSlice.reducer;