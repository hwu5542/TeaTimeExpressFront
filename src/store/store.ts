import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from '../slices/UserSlice'

const store = configureStore({
    reducer:{
        users: usersReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
