import usersReducer from './UserSlice'
import productsReducer from './ProductsSlice'
import ordersReducer from './OrdersSlice';

const state = {
    users:usersReducer,
    products:productsReducer,
    orders:ordersReducer
}

export default state;