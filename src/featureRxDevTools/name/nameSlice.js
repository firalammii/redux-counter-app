import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: 'name',
    initialState: {
        fname: 'empty',
    },
    reducers: {
        dewanos: (state, action) => {
            state.fname = action.payload + ' Dewano';
        },
        g: (state) => {
            state.fname = '----------------';
        }
    }
});

const { actions, reducer } = nameSlice;
export const { dewanos, g } = actions;
export default reducer;