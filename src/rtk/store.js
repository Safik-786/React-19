import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
<<<<<<< HEAD
import { cartReducer } from "./slice/cartSlice";
export const store = configureStore({
  reducer: {
    count: counterReducer,
    cart: cartReducer,
  },
});

























=======
import {cartReducer} from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    cart: cartReducer
  },
});
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
