import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import {cartReducer} from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    cart: cartReducer
  },
});
