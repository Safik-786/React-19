import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

export const reducers= combineReducers({
    count: counterReducer,
    cart: cartReducer
})