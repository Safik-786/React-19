import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

export const reducers= combineReducers({
    count: counterReducer,
    // cart: cartReducer
})