import usersReducer from './UserSlice';
import productsReducer from './ProductsSlice';
import ordersReducer from './OrdersSlice';
import adminReducer from './AdminSlice';


const state = {
    users:usersReducer,
    products:productsReducer,
    orders:ordersReducer,
    admin:adminReducer
}

export default state;