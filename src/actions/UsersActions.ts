import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiSignUpUsers, ApiValidateUsers } from "../remote/SpringApi";
import { UserCredential } from "../models/UserCredential";
import { UserState } from "../slices/UserSlice";

export enum UsersActionTypes {
    USERS_SIGNUP = 'users/signUp',
    USERS_LOGIN = 'users/login'
}

export const loginAsync = createAsyncThunk(
    UsersActionTypes.USERS_LOGIN,
    async(validatingCredential:{username: string, password:string}) => {
        const usersCredential = await ApiValidateUsers(new UserCredential(validatingCredential.username, validatingCredential.password));
        if (typeof usersCredential === 'object') return usersCredential;
    }
);

export const signUpAsync = createAsyncThunk(
    UsersActionTypes.USERS_SIGNUP,
    async (newCredential:{username: string, password:string}) => {
        const usersCredential = await ApiSignUpUsers(new UserCredential(newCredential.username, newCredential.password));
        if (typeof usersCredential === 'object') return usersCredential;
    }
);