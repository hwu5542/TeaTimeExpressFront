import { combineReducers } from "redux";
import usersReducer from "./UsersReducer";

const state = combineReducers({
    users:usersReducer,
})

export default state;