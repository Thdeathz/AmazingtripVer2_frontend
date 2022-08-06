import { configureStore } from "@reduxjs/toolkit";
import testSlice from "~/features/Test/testSlice";
import guestSlice from "~/features/Guest/guestSlice";
import { apiSlice } from "~/api/apiSlice";
import authReducer from "~/features/Auth/authSlice";

const store = configureStore({
    reducer: {
        test: testSlice.reducer,
        guest: guestSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;