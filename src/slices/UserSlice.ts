import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyUser, Users } from "../models/Users";
import { RootState } from "../store/store";
import { AddressAction, loginAsync, setBillingAddress, setMaillingAddress, signUpAsync, updateProfileAsync } from "../actions/UsersActions";
import { emptyAddress } from "../models/Addresses";

export interface UserState{
    profile: string;
    status: 'idle' | 'loading' | 'failed';
}


const initialState: UserState = {
    profile: JSON.stringify(emptyUser),
    status: 'idle',
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutAction: (state) => {state.profile = JSON.stringify(emptyUser);},
        setAddressAction: (state, action:PayloadAction<AddressAction>) => {
            let index = Number.parseInt(action.payload.index.split('_')[1]);
            if (index<0) {state.profile = setBillingAddress(state.profile, action.payload).payload}
            else {state.profile = setMaillingAddress(state.profile, action.payload, index).payload}
        },
        addAddressAction: (state) => {
            let profile:Users = JSON.parse(state.profile);
            profile.userMailAddress.push(emptyAddress);
            state.profile = JSON.stringify(profile);
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(signUpAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpAsync.fulfilled, (state, action) =>{
                state.status = 'idle';
                state.profile = JSON.stringify(action.payload);
            })
            .addCase(signUpAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.profile = JSON.stringify(action.payload);
            })
            .addCase(loginAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(updateProfileAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProfileAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.profile = JSON.stringify(action.payload);
            })
            .addCase(updateProfileAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const { logoutAction, setAddressAction, addAddressAction } = usersSlice.actions;

export const selectUser = (state: RootState) => state.users.profile;

export default usersSlice.reducer;