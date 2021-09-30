import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
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