import { combineReducers } from "redux";
import usersReducer from './UserSlice'
import productsReducer from './ProductsSlice'
import ordersReducer from './OrdersSlice';

const state = combineReducers({
    users:usersReducer,
    products:productsReducer,
    orders:ordersReducer
})

export default state;