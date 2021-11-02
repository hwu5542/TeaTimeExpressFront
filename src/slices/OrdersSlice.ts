import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listOrdersAsync, searchOrdersAsync } from "../actions/OrdersActions";
import { Cart } from "../models/Cart";
import { emptyOrder, Orders } from "../models/Orders";
import { RootState } from "../store/store";

export interface ordersState {
    newOrder: string;
    orders: string[];
    status: 'idle' | 'loading' | 'failed';
}


const initialState:ordersState = {
    newOrder : JSON.stringify(emptyOrder),
    orders : [JSON.stringify(emptyOrder)],
    status : 'idle'
}

const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        addToCartAction:(state, action:PayloadAction<Cart>) => {
            let order:Orders = JSON.parse(state.newOrder);
            order.orderTotal += action.payload.orderPrice;
            order.orderCart.push(action.payload);
            state.newOrder = JSON.stringify(order);
        },

        checkoutAction:(state) => {state.newOrder = JSON.stringify(emptyOrder)},
        // cancelOrderAction:(state) => {state.orders = cancelOrder(state.orders.order_number).payload}
        // deleteOrderAction:(state) => {state.orders = deleteOrder(state.orders)}
    },

    extraReducers:(builder) => {
        builder
            .addCase(searchOrdersAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(searchOrdersAsync.fulfilled, (state, action) => {
                state.newOrder = JSON.stringify(action.payload) || initialState.newOrder;
                state.status = 'idle';
            })
            .addCase(searchOrdersAsync.rejected, (state) => {
                state.status = 'failed'
            })
            
            .addCase(listOrdersAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(listOrdersAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    let ordersList = new Array(action.payload.length)
                    let index = 0;
                    
                    for (let order of action.payload) {
                        ordersList[index++] = JSON.stringify(order);
                    }

                    state.orders = ordersList;
                } else {
                    state.orders = initialState.orders;
                }

                state.status = 'idle';
            })
            .addCase(listOrdersAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { addToCartAction, checkoutAction } = ordersSlice.actions;

export const selectOrders = (state:RootState) => state.orders.orders;

export const selectNewOrder = (state:RootState) => state.orders.newOrder;

export const selectCart = (state:RootState) => JSON.parse(state.orders.newOrder).orderCart;

export default ordersSlice.reducer;