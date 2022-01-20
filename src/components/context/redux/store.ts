import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import RootReducer from "./reducers/RootReducer";

export const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export type RootState = ReturnType<typeof RootReducer>