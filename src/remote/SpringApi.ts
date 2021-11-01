import SpringClient from "./SpringClient"
import { Users } from "../models/Users"
import { UsersActionTypes } from "../actions/UsersActions";
import { ProductsActionTypes } from "../actions/ProductsActions";
import { Products } from "../models/Products";
import { OrdersActionTypes } from "../actions/OrdersActions";
import { Orders } from "../models/Orders";
import { UserCredential } from "../models/UserCredential";
import { AdminActionTypes } from "../actions/AdminActions";
import { Cart } from "../models/Cart";

export const ApiSignUpUsers = async(credential:UserCredential):Promise<Users|false> => {
    const response = await SpringClient.post<Users>(UsersActionTypes.USERS_SIGNUP, credential);

    if (response.status === 201) return response.data;

    return false;
}

export const ApiValidateUsers = async(credential:UserCredential):Promise<Users|false> => {
    const response = await SpringClient.post<Users>(UsersActionTypes.USERS_LOGIN, credential);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiUpdateUsers = async(newProfile:Users):Promise<Users|false> => {
    const response = await SpringClient.post<Users>(UsersActionTypes.USERS_UPDATE, newProfile);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiListAccounts = async(credential:UserCredential):Promise<Users[]|false> => {
    const response = await SpringClient.post<Users[]>(AdminActionTypes.ADMIN_ACCOUNTS_LIST, credential);

    if (response.status === 200) return response.data;

    return false;
}

// export const ApiSearchProducts = async(productId:number):Promise<Products|false> => {
//     const response = await SpringClient.get<Products>(ProductsActionTypes.GET_PRODUCT + '/' + productId);

//     if (response.status === 200) return response.data;

//     return false;
// }

export const ApiListProducts = async():Promise<Products[]|false> => {
    const response = await SpringClient.get<Products[]>(ProductsActionTypes.GET_PRODUCT_LIST);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiSearchOrders = async(ordersId:number):Promise<Orders|false> => {
    const response = await SpringClient.get<Orders>(OrdersActionTypes.GET_ORDER + '/' + ordersId);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiListOrders = async():Promise<Orders[]|false> => {
    const response = await SpringClient.get<Orders[]>(OrdersActionTypes.GET_ORDER_LIST);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiCreateOrders = async(cart:Cart[]):Promise<Orders[]|false> => {
    const response = await SpringClient.post<Orders[]>(OrdersActionTypes.NEW_ORDER, cart);

    if (response.status === 201) return response.data;

    return false;
}