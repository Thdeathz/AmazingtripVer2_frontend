import { configureStore } from "@reduxjs/toolkit";
import testSlice from "~/features/Test/testSlice";

const store = configureStore({
    reducer: {
        test: testSlice.reducer,
    },
});

export default store;