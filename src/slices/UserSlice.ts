import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../models/Users";
import { RootState } from "../store/store";
import { loginAsync, signUpAsync } from "../actions/UsersActions";

export interface UserState{
    profile: string;
    status: 'idle' | 'loading' | 'failed';
}

// JSON.parse(user.toStorageString())

const initialState: UserState = {
    profile: JSON.stringify(new Users(0, "", "", "", "", "")),
    status: 'idle',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutAction: (state) => {state = initialState;}
    },

    extraReducers: (builder) => {
        builder
            .addCase(signUpAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpAsync.fulfilled, (state, action) =>{
                state.status = 'idle';
                state.profile = JSON.stringify(action.payload) || initialState.profile;
            })
            .addCase(signUpAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.profile = JSON.stringify(action.payload) || initialState.profile;
            })
            .addCase(loginAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { logoutAction } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;