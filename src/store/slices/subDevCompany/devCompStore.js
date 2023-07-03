import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { subDevCompSlice } from "./devCompSlice";



export const store = configureStore({
    reducer: {
        [subDevCompSlice.reducerPath]: subDevCompSlice.reducer},
        middleware: ( getDefaultMiddleware) => getDefaultMiddleware().concat(subDevCompSlice.middleware)
})