import { ActionCreator } from "redux";
import { Users } from "../models/Users";

export enum UsersActionTypes {
    USERS_SIGNUP = 'users/signup',
    USERS_LOGIN_CUTOMER = 'users/customer',
    USERS_LOGIN_ADMIN = 'users/admin'
}

export type UsersActionLoginCustomer = {
    type:UsersActionTypes.USERS_LOGIN_CUTOMER,
    payload?:Users
}

export type UsersActionLoginAdmin = {
    type:UsersActionTypes.USERS_LOGIN_ADMIN,
    payload?:Users
}

export type UsersActionLogin = UsersActionLoginAdmin | UsersActionLoginCustomer;

export const loginCustomer:ActionCreator<UsersActionLoginCustomer> = (userCredential:Users) => {
    return {
        type:UsersActionTypes.USERS_LOGIN_CUTOMER,
        payload:userCredential
    }
}

export const loginAdmin:ActionCreator<UsersActionLoginAdmin> = (userCredential:Users) => {
    return {
        type:UsersActionTypes.USERS_LOGIN_ADMIN,
        payload:userCredential
    }
}