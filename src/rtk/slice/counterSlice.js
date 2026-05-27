import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decreament: (state, action) => {
            state.count -= 1;
        },
        incrementCustom: (state, action) => {
<<<<<<< HEAD
            console.log("action= ", action)
=======
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
            state.count += action.payload;
        },
        reset: (state, action) => {
            state.count = 0;
        }
    }
})


<<<<<<< HEAD
console.log(" counterSlice:", counterSlice)
=======
console.log("   counterSlice:", counterSlice)
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799


export const { increment, decreament, incrementCustom, reset } = counterSlice.actions;


<<<<<<< HEAD

=======
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
// export let increament= counterSlice.actions.increment;
// export let decreament= counterSlice.actions.decreament;
// export let incrementCustom= counterSlice.actions.incrementCustom;
// export let reset= counterSlice.actions.reset;

let counterReducer= counterSlice.reducer;
export  {counterReducer}