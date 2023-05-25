import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk(
    'todos/gfetchTodos', async (thunkAPI) => {
        const res = await axios.get(thunkAPI)
        return res.data
    }
)
export const todoSlice = createSlice({
    name: "count",
    initialState: {
        todos: undefined,
        loading: false,
        error: undefined,
    },
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, { payload }) => {
            state.todos = payload,
                state.loading = false,
                state.error = undefined
        })
        builder.addCase(getData.pending, (state) => {
            state.todos = undefined,
                state.loading = true,
                state.error = undefined
        })
        builder.addCase(getData.rejected, (state, { payload }) => {
            state.todos = undefined,
                state.loading = false,
                state.error = payload
        })
    }
});
export const { } =
    todoSlice.actions;

export default todoSlice.reducer;
// {
//     [getData.pending]: (state) => {
//         state.todos = undefined,
//             state.loading = true,
//             state.error = undefined
//     },
//     [getData.rejected]: (state, { payload }) => {
//         state.todos = undefined,
//             state.loading = false,
//             state.error = payload
//     },
//     [getData.fulfilled]: (state, { payload }) => {
//         state.todos = payload,
//             state.loading = false,
//             state.error = undefined
//     }
// }