import { ThunkAction, Action, configureStore, createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import state from '../slices';

const store = createStore (
    state,
    composeWithDevTools(applyMiddleware(thunk))
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
