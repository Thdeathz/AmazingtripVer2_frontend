import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "~/api/userApi";

const guestSlice = createSlice({
    name: 'guest',
    initialState: { status: 'idle', data: {} },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(processLogin.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(processLogin.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'idle';
            })
    }
});

export const processLogin = createAsyncThunk('guest/processLogin', async (userData) => {
    const res = await userApi.login(userData); 
    return res;
})


export default guestSlice;