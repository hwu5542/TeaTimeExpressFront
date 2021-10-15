import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiSignUpUsers, ApiUpdateUsers, ApiValidateUsers } from "../remote/SpringApi";
import { UserCredential } from "../models/UserCredential";
import { Users } from "../models/Users";

export enum UsersActionTypes {
    USERS_SIGNUP = 'users/signUp',
    USERS_LOGIN = 'users/login',
    USERS_UPDATE = 'users/update',
    USERS_UPDATE_PROFILE = 'users/update/profile'
}
export enum AddressActionTypes {
    FIRST,
    SECOND,
    POSTCODE,
    APTSUITE,
    CITY,
    STATE,
    COUNTY, 
}
export type AddressAction = {
    type:AddressActionTypes,
    index:string,
    payload:string
}

export const setMaillingAddress = (oldProfileStr:string, changingItem:AddressAction) => {
    let profile:Users = JSON.parse(oldProfileStr);
    switch (changingItem.type) {
        case AddressActionTypes.FIRST:
            profile.userMailAddress[Number.parseInt(changingItem.index)].addressLineOne = changingItem.payload;
            break;
        case AddressActionTypes.SECOND:
            profile.userMailAddress[Number.parseInt(changingItem.index)].addressLineTwo = changingItem.payload;
            break;
        case AddressActionTypes.POSTCODE:
            profile.userMailAddress[Number.parseInt(changingItem.index)].addressPostcode = changingItem.payload;
            break;
        case AddressActionTypes.APTSUITE:
            profile.userMailAddress[Number.parseInt(changingItem.index)].addressAptSuite = changingItem.payload;
            break;
        case AddressActionTypes.CITY:
            profile.userMailAddress[Number.parseInt(changingItem.index)].addressCity = changingItem.payload;
            break;
        case AddressActionTypes.STATE:
            profile.userMailAddress[Number.parseInt(changingItem.index)].addressState = changingItem.payload;
            break;
        case AddressActionTypes.COUNTY:
            profile.userMailAddress[Number.parseInt(changingItem.index)].addressCountry = changingItem.payload;
            break;
    }
    return {
        type:UsersActionTypes.USERS_UPDATE_PROFILE,
        payload:JSON.stringify(profile)
    }
}

export const setBillingAddress = (oldProfileStr:string, changingItem:AddressAction) => {
    let profile:Users = JSON.parse(oldProfileStr);
    switch (changingItem.type) {
        case AddressActionTypes.FIRST:
            profile.userBillAddress.addressLineOne = changingItem.payload;
            break;
        case AddressActionTypes.SECOND:
            profile.userBillAddress.addressLineTwo = changingItem.payload;
            break;
        case AddressActionTypes.POSTCODE:
            profile.userBillAddress.addressPostcode = changingItem.payload;
            break;
        case AddressActionTypes.APTSUITE:
            profile.userBillAddress.addressAptSuite = changingItem.payload;
            break;
        case AddressActionTypes.CITY:
            profile.userBillAddress.addressCity = changingItem.payload;
            break;
        case AddressActionTypes.STATE:
            profile.userBillAddress.addressState = changingItem.payload;
            break;
        case AddressActionTypes.COUNTY:
            profile.userBillAddress.addressCountry = changingItem.payload;
            break;
    }
    return {
        type:UsersActionTypes.USERS_UPDATE_PROFILE,
        payload:JSON.stringify(profile)
    }
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