import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Tab = "current" | "all" | "done" | "deleted";

export interface NavbarSlice {
    tab: Tab;
}

const initialState: NavbarSlice = {
    tab: "current",
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        changeTab(state, action: PayloadAction<Tab>) {
            state.tab = action.payload;
        },
    },
});

export const { changeTab } = navbarSlice.actions;

export default navbarSlice.reducer;
