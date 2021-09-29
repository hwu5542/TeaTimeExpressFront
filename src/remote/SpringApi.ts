import SpringClient from "./SpringClient"
import { Users } from "../models/Users"

export const ApiGetUsers = async(username:String):Promise<Users|false> => {
    const response = await SpringClient.get<Users>('users/' + username);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiValidateUsers = async(username:String, password:String):Promise<Users|false> => {
    const response = await SpringClient.post<Users>('users/login/', {username, password});

    if (response.status == 200) return response.data;

    return false;
}