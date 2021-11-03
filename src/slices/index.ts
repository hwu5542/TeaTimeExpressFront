import usersReducer from './UserSlice';
import productsReducer from './ProductsSlice';
import ordersReducer from './OrdersSlice';
import adminReducer from './AdminSlice';
import {reducer as toastrReducer} from 'react-redux-toastr'


const state = {
    users:usersReducer,
    products:productsReducer,
    orders:ordersReducer,
    admin:adminReducer,
    toastr:toastrReducer
}

export default state;