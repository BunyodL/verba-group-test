import { configureStore } from "@reduxjs/toolkit";
import { navbarSlice, tasksSlice } from "./slices";

export const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        tasks: tasksSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
