import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listOrdersAsync, newOrder, searchOrdersAsync } from "../actions/OrdersActions";
import { Cart, emptyCart } from "../models/Cart";
import { emptyOrder, Orders } from "../models/Orders";
import { RootState } from "../store/store";

export interface ordersState {
    order: string;
    orders: string[];
    cart: string[];
    status: 'idle' | 'loading' | 'failed';
}


const initialState:ordersState = {
    order : JSON.stringify(emptyOrder),
    orders : [JSON.stringify(emptyOrder)],
    cart : [],
    status : 'idle'
}

const ordersSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        newOrderAction:(state) => {state.order = JSON.stringify(newOrder(JSON.parse(state.order)).payload)},
        addToCartAction:(state, action:PayloadAction<Cart>) => {state.cart.push(JSON.stringify(action.payload))},
        checkoutAction:(state) => {},
        // cancelOrderAction:(state) => {state.orders = cancelOrder(state.orders.order_number).payload}
        // deleteOrderAction:(state) => {state.orders = deleteOrder(state.orders)}
    },

    extraReducers:(builder) => {
        builder
            .addCase(searchOrdersAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(searchOrdersAsync.fulfilled, (state, action) => {
                state.order = JSON.stringify(action.payload) || initialState.order;
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

export const { newOrderAction, addToCartAction, checkoutAction } = ordersSlice.actions;

export const selectOrders = (state:RootState) => state.orders.orders;

export const selectCart = (state:RootState) => state.orders.cart;

export default ordersSlice.reducer;