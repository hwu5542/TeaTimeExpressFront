import SpringClient from "./SpringClient"
import { Users } from "../models/Users"

export const ApiGetUsers = async(username:String):Promise<Users|boolean> => {
    const response = await SpringClient.get<Users>('users/' + username);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiValidateUsers = async(username:String, password:String):Promise<boolean> => {
    const response = await SpringClient.post<boolean>('login/', {username, password});

    if (response.status == 200) return response.data;

    return false;
}