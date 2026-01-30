import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import { reducers } from "./reducers/index";



export const store= createStore(reducers)