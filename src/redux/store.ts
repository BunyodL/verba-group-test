import { configureStore } from "@reduxjs/toolkit";
import { navbarSlice, tasksSlice, authSlice } from "./slices";

export const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        tasks: tasksSlice,
        auth: authSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
