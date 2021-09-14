import { ActionCreator } from "redux";
import { Users } from "../models/Users";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGetUsers, ApiValidateUsers } from "../remote/SpringApi";
import usersReducer from "../reducers/UsersReducer";

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

export type UsersActionSignUp = {
    type:UsersActionTypes.USERS_SIGNUP,
    payload?:{username:String, password:String}
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

export const loginCustomerAsync = createAsyncThunk(
    UsersActionTypes.USERS_LOGIN_CUTOMER,
    async(username: String) => {
        const usersCredential = await ApiGetUsers(username);
        if (usersCredential) return loginCustomer(usersCredential);
    }
);

export const loginadminAsync = createAsyncThunk(
    UsersActionTypes.USERS_LOGIN_ADMIN,
    async(username: String) => {
        const usersCredential = await ApiGetUsers(username);
        if (usersCredential) return loginAdmin(usersCredential);
    }
);

export const signUpAsync = createAsyncThunk(
    UsersActionTypes.USERS_SIGNUP,
    async (validatingCredential:{username: String, password:String}) => {
        const usersCredential = await ApiValidateUsers(validatingCredential.username, validatingCredential.password);
        if (usersCredential) return loginCustomer(usersCredential);
    }
)