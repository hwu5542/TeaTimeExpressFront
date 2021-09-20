import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from '../slices/UserSlice'
import productsReducer from '../slices/ProductsSlice'
import ordersReducer from '../slices/OrdersSlice';

const store = configureStore({
    reducer:{
        users: usersReducer,
        products: productsReducer,
        orders: ordersReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
