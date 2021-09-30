import SpringClient from "./SpringClient"
import { Users } from "../models/Users"

export const ApiGetUsers = async(username:string):Promise<Users|false> => {
    const response = await SpringClient.get<Users>('teatimeexpress/users/' + username);

    if (response.status === 200) return response.data;

    return false;
}

export const ApiValidateUsers = async(username:string, password:string):Promise<Users|false> => {
    const response = await SpringClient.post<Users>('teatimeexpress/users/login/', {username, password});

    if (response.status == 200) return response.data;

    return false;
}