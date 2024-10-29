import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TabStatus = "current" | "all" | "done" | "deleted";
type Tab = { name: string; status: TabStatus };

export interface NavbarSlice {
    tab: TabStatus;
    tabs: Tab[];
}

const initialState: NavbarSlice = {
    tab: "current",
    tabs: [
        {
            name: "Текущие дела",
            status: "current",
        },
        {
            name: "Все дела",
            status: "all",
        },
        {
            name: "Выполненные дела",
            status: "done",
        },
        {
            name: "Корзина",
            status: "deleted",
        },
    ],
};

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        changeTab(state, action: PayloadAction<TabStatus>) {
            state.tab = action.payload;
        },
    },
});

export const { changeTab } = navbarSlice.actions;

export default navbarSlice.reducer;
