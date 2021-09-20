import { combineReducers } from "redux";
import usersReducer from '../slices/UserSlice'
import productsReducer from '../slices/ProductsSlice'
import ordersReducer from '../slices/OrdersSlice';

const state = combineReducers({
    users:usersReducer,
    products:productsReducer,
    orders:ordersReducer
})

export default state;