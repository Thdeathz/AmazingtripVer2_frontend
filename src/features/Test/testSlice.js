import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "~/api/userApi";

const testSlice = createSlice({
    name: 'test',
    initialState: { status: 'idle', data: [] },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserList.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUserList.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'idle';
            })
    }
});

export const fetchUserList = createAsyncThunk('users/fetchUserList', async () => {
    const res = await userApi.getAllUserData();
    return res.data;
});

export default testSlice;
