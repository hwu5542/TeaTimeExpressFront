import { createSlice } from "@reduxjs/toolkit";
import { cancelOrder, deleteOrder, listOrdersAsync, newOrder, searchOrdersAsync } from "../actions/OrdersActions";
import { Orders } from "../models/Orders";
import { RootState } from "../store/store";

export interface ordersState {
    order: Orders;
    orders: Orders[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState:ordersState = {
    order : new Orders(0, 0, 0, 0, 0, ""),
    orders : [],
    status : 'idle'
}

const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        newOrderAction:(state) => {state.order = newOrder(state.order).payload}
        // cancelOrderAction:(state) => {state.orders = cancelOrder(state.orders.order_number).payload}
        // deleteOrderAction:(state) => {state.orders = deleteOrder(state.orders)}
    },

    extraReducers:(builder) => {
        builder
            .addCase(searchOrdersAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(searchOrdersAsync.fulfilled, (state, action) => {
                state.order = action.payload || initialState.order;
                state.status = 'idle';
            })
            .addCase(searchOrdersAsync.rejected, (state) => {
                state.status = 'failed'
            })
            
            .addCase(listOrdersAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(listOrdersAsync.fulfilled, (state, action) => {
                state.orders = action.payload || initialState.orders;
                state.status = 'idle';
            })
            .addCase(listOrdersAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { newOrderAction } = ordersSlice.actions;

export const selectOrders = (state:RootState) => (state.orders)

export default ordersSlice.reducer;