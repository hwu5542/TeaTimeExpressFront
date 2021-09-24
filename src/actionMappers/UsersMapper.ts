import { ActionCreator } from "redux";
import { Users } from "../models/Users";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGetUsers, ApiValidateUsers } from "../remote/SpringApi";

export enum UsersActionTypes {
    USERS_SIGNUP = 'users/signup',
    USERS_LOGIN_CUTOMER = 'users/customer',
    USERS_LOGIN_ADMIN = 'users/admin',
    USERS_LOGIN_CUTOMER_ASYNC = 'users/async/customer'
}

export type UsersActionLoginCustomer = {
    type:UsersActionTypes.USERS_LOGIN_CUTOMER,
    payload?:Users
}

export type UsersActionLoginAdmin = {
    type:UsersActionTypes.USERS_LOGIN_ADMIN,
    payload?:Users
}

export type UsersActionSignUp = {
    type:UsersActionTypes.USERS_SIGNUP,
    payload?:Users
}

export type UsersAction = UsersActionLoginAdmin | UsersActionLoginCustomer | UsersActionSignUp;

export const loginCustomer = (state:any) => {
    return {
        type:UsersActionTypes.USERS_LOGIN_CUTOMER,
        payload:state.profile
    }
}

export const loginAdmin = (state:any) => {
    return {
        type:UsersActionTypes.USERS_LOGIN_ADMIN,
        payload:state.profile
    }
}

export const loginCustomerAsync = createAsyncThunk(
    UsersActionTypes.USERS_LOGIN_CUTOMER_ASYNC,
    async(username: String) => {
        const usersCredential = await ApiGetUsers(username);
        if (typeof usersCredential === 'object') return usersCredential;
    }
);

export const loginadminAsync = createAsyncThunk(
    UsersActionTypes.USERS_LOGIN_ADMIN,
    async(username: String) => {
        const usersCredential = await ApiGetUsers(username);
        if (typeof usersCredential === 'object') return usersCredential;
    }
);

export const signUpAsync = createAsyncThunk(
    UsersActionTypes.USERS_SIGNUP,
    async (validatingCredential:{username: String, password:String}) => {
        const usersCredential = await ApiValidateUsers(validatingCredential.username, validatingCredential.password);
        if (typeof usersCredential === 'object') return usersCredential;
    }
)