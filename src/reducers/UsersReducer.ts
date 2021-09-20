import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "react";
import { signUpAsync, UsersAction, UsersActionTypes } from "../action-mappers/Users-mapper";
import { Users } from "../models/Users";

const initialState:Users = new Users(0, "", "", "", "", "");

export const usersSlice = createSlice ({
    name: 'usersSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(signUpAsync.pending, (state) => {
            })
            .addCase(signUpAsync.fulfilled, (state, action) => {
            })
    }
})

const usersReducer: Reducer<Users, UsersAction> = (preState=initialState, action) => {
    switch(action.type){
        case UsersActionTypes.USERS_LOGIN_CUTOMER:
            return action.payload||initialState;
        case UsersActionTypes.USERS_LOGIN_ADMIN:
            return action.payload||initialState;
        case UsersActionTypes.USERS_SIGNUP:
            return action.payload||initialState;
    }
}

export default usersReducer;