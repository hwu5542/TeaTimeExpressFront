import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../models/Users";
import { RootState } from "../store/store";
import { loginAsync, signUpAsync } from "../actions/UsersActions";

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
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(signUpAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpAsync.fulfilled, (state, action) =>{
                state.status = 'idle';
                state.profile = action.payload || initialState.profile;
            })
            .addCase(signUpAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.profile = action.payload || initialState.profile;
            })
            .addCase(loginAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;