import { Reducer } from "react";
import { UsersActionLogin, UsersActionTypes } from "../action-mappers/Users-mapper";
import { Users } from "../models/Users";

let initialState:Users = new Users(0, "", "", "", "", "");

const usersReducer: Reducer<Users, UsersActionLogin> = (preState=initialState, action) => {
    switch(action.type){
        case UsersActionTypes.USERS_LOGIN_CUTOMER:
            return action.payload||initialState;
        case UsersActionTypes.USERS_LOGIN_ADMIN:
            return action.payload||initialState;
    }
}

export default usersReducer;