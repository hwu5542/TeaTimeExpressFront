import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiSignUpUsers, ApiUpdateUsers, ApiValidateUsers } from "../remote/SpringApi";
import { UserCredential } from "../models/UserCredential";
import { UserState } from "../slices/UserSlice";
import { Users } from "../models/Users";

export enum UsersActionTypes {
    USERS_SIGNUP = 'users/signUp',
    USERS_LOGIN = 'users/login',
    USERS_UPDATE = 'users/update'
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

export const updateProfileAsync = createAsyncThunk(
    UsersActionTypes.USERS_UPDATE,
    async (newProfile:Users) => {
        const usersCredential = await ApiUpdateUsers(newProfile);
        if (typeof usersCredential === 'object') return usersCredential;
    }
);