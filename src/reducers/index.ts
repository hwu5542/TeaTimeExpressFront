import { combineReducers } from "redux";
import ordersReducer from "./OrdersReducer";
import productsReducer from "./ProductsReducer";
import usersReducer from "./UsersReducer";

const state = combineReducers({
    users:usersReducer,
    products:productsReducer,
    orders:ordersReducer
})

export default state;