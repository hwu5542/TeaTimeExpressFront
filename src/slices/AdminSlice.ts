import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../models/Users";
import { RootState } from "../store/store";
import { Addresses } from "../models/Addresses";
import { Orders } from "../models/Orders";
import { listAccountsAsync } from "../actions/AdminActions";

export interface AdminState{
    accounts: string[];
    orders: string[];
    status: 'idle' | 'loading' | 'failed';
}

const emptyAddress = new Addresses(0, "", "", "", "", "", "", "");
const emptyUser = new Users(0, "", "", "", "", "", "", "", emptyAddress, [emptyAddress]);
const emptyOrder = new Orders(0,0,0,0,"","");

const initialState: AdminState = {
    accounts: [JSON.stringify(emptyUser)],
    orders: [JSON.stringify(emptyOrder)],
    status: 'idle',
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(listAccountsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listAccountsAsync.fulfilled, (state, action) =>{
                state.status = 'idle';
                if (action.payload) {
                    let accountsList = new Array(action.payload.length)
                    let index = 0;
                    
                    for (let account of action.payload) {
                        accountsList[index++] = JSON.stringify(account);
                    }

                    state.accounts = accountsList;
                } else {
                    state.accounts = initialState.accounts;
                }
            })
            .addCase(listAccountsAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
})

export const {} = adminSlice.actions;

export const selectAccounts = (state: RootState) => state.admin.accounts;

export const selectOrders = (state: RootState) => state.admin.orders;

export default adminSlice.reducer;