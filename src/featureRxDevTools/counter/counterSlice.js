import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     count: 1
// };
const counterSlice = createSlice({
    name: 'count',
    initialState: {
        count: 2
    },
    reducers: {
        increment: (state) => { console.log('increment'); state.count += 1; },
        decrement: (state) => { state.count -= 1; },
        double: (state) => { console.log(state.count); state.count *= 2; console.log(state.count); },
        addPayload: (state, action) => { console.log(action.payload); state.count += action.payload; },
        reset: (state) => { state.count = 1; }

    }
});

export const { actions, reducer } = counterSlice;
export const { increment, decrement, double, reset, addPayload } = actions;
export default reducer;

// export const { counter } = counterSlice;
// export const { increment, decrement, double, reset, addPayload } = counterSlice.actions;
// export default counterSlice.reducer;        