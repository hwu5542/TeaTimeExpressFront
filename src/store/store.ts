import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import state from "../reducers/index";

const store = createStore(
    state,
    composeWithDevTools()
)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
