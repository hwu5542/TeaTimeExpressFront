import { ThunkAction, Action, createStore, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import state from '../slices';

export const store = configureStore({
    reducer:state
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;


// const store = createStore (
//     state,
//     composeWithDevTools(applyMiddleware(thunk))
// )
