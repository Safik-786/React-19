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
            state.count += action.payload;
        },
        reset: (state, action) => {
            state.count = 0;
        }
    }
})


console.log("   counterSlice:", counterSlice)


export const { increment, decreament, incrementCustom, reset } = counterSlice.actions;


// export let increament= counterSlice.actions.increment;
// export let decreament= counterSlice.actions.decreament;
// export let incrementCustom= counterSlice.actions.incrementCustom;
// export let reset= counterSlice.actions.reset;

let counterReducer= counterSlice.reducer;
export  {counterReducer}