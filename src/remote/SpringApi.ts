import SpringClient from "./SpringClient"
import { Users } from "../models/Users"
import { UsersActionTypes } from "../actions/UsersActions";

export const ApiSignUpUsers = async(username:string, password:string):Promise<Users|false> => {
    const response = await SpringClient.post<Users>(UsersActionTypes.USERS_SIGNUP, {username, password});

    if (response.status === 200) return response.data;

    return false;
}

export const ApiValidateUsers = async(username:string, password:string):Promise<Users|false> => {
    const response = await SpringClient.post<Users>(UsersActionTypes.USERS_LOGIN, {username, password});

    if (response.status == 200) return response.data;

    return false;
}