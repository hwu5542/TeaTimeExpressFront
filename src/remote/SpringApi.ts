import SpringClient from "./SpringClient"
import { Users } from "../models/Users"

export const ApiGetUsers = async():Promise<Users|boolean> => {
    const response = await SpringClient.get<Users>('users');

    if (response.status === 200) return response.data;

    return false;
}

export const ApiValidateUsers = async():Promise<boolean> => {
    const response = await SpringClient.get<boolean>('login');

    if (response.status == 200) return true;

    return false;
}