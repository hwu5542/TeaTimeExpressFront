import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../models/Users";
import { RootState } from "../store/store";
import { loginAdmin, loginCustomer, loginCustomerAsync, UsersActionTypes } from "../actionMappers/UsersMapper";

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
            .addCase(loginCustomerAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginCustomerAsync.fulfilled, (state, action) =>{
                state.status = 'idle';
                state.profile = action.payload || initialState.profile;
            })
            .addCase(loginCustomerAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { loginAdminAction, loginCustomerAction } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
