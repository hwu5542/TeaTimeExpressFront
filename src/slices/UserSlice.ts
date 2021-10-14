import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../models/Users";
import { RootState } from "../store/store";
import { AddressAction, loginAsync, setBillingAddress, setMaillingAddress, signUpAsync, updateProfileAsync } from "../actions/UsersActions";
import { Addresses } from "../models/Addresses";

export interface UserState{
    profile: string;
    status: 'idle' | 'loading' | 'failed';
}

// JSON.parse(user.toStorageString())
const emptyAddress = new Addresses(0, "", "", "", "", "", "", "");
const emptyUser = new Users(0, "", "", "", "", "", "", "", emptyAddress, [emptyAddress])

const initialState: UserState = {
    profile: JSON.stringify(emptyUser),
    status: 'idle',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutAction: (state) => {state = initialState;},
        setMaillingAddressAction: (state, action:PayloadAction<AddressAction>) => {state.profile = setMaillingAddress(state.profile, action.payload).payload},
        setBillingAddressAction: (state, action:PayloadAction<AddressAction>) => {state.profile = setBillingAddress(state.profile, action.payload).payload}
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

            .addCase(updateProfileAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProfileAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.profile = JSON.stringify(action.payload) || initialState.profile;
            })
            .addCase(updateProfileAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { logoutAction, setBillingAddressAction, setMaillingAddressAction } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;