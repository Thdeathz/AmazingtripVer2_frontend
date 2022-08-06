import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { role, access_token } = action.payload;
            console.log(access_token);
            state.user = role;
            state.token = access_token;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
        } 
    },
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;


//Selector
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;