import { configureStore } from "@reduxjs/toolkit";
import testSlice from "~/features/Test/testSlice";
import guestSlice from "~/features/Guest/guestSlice";

const store = configureStore({
    reducer: {
        test: testSlice.reducer,
        guest: guestSlice.reducer,
    },
});

export default store;