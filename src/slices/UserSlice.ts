import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../models/Users";
import { RootState } from "../store/store";
import { loginAdmin, loginadminAsync, loginCustomer, loginCustomerAsync, signUpAsync, UsersActionTypes } from "../actionMappers/UsersMapper";
import { ApiValidateUsers } from "../remote/SpringApi";

export interface UserState{
    profile: Users;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
    profile: new Users(0, "", "", "", "", ""),
    status: 'idle',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginCustomerAction: (state) => {state.profile = loginCustomer(state).payload},
        loginAdminAction: (state) => {state.profile = loginAdmin(state).payload}
    },

    extraReducers: (builder) => {
        builder
            .addCase(signUpAsync.pending, (state) => {
                state.status = 'loading';
            })
            // .addCase(loginadminAsync.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(signUpAsync.pending, (state) = > {
            //     state.status = 'loading';
            // })
            .addCase(signUpAsync.fulfilled, (state, action) =>{
                state.status = 'idle';
                state.profile = action.payload || initialState.profile;
            })
            .addCase(signUpAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { loginAdminAction, loginCustomerAction } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;