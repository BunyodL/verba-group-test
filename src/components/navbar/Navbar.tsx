import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useTotalTabTasks } from "../../hooks/useTotalTabTasks";
import { changeTab, TabStatus } from "../../redux/slices/navbarSlice";
import st from "./Navbar.module.css";

export default function Navbar() {
    const dispatch = useAppDispatch();
    const currentTab = useAppSelector((state) => state.navbar.tab);
    const tabs = useAppSelector((state) => state.navbar.tabs);
    const tabTasks = useTotalTabTasks();

    const handleTabChange = (event: React.SyntheticEvent, newValue: TabStatus) => {
        dispatch(changeTab(newValue));
    };

    return (
        <Box sx={{ width: "100%", height: "40px" }}>
            <Tabs
                value={currentTab}
                onChange={handleTabChange}
                aria-label="wrapped label tabs"
                id={st.tabs}
            >
                {tabs.map((tab) => {
                    const tabLabel =
                        tabTasks[tab.status] > 0
                            ? `${tab.name} (${tabTasks[tab.status]})`
                            : tab.name;
                    return (
                        <Tab
                            value={tab.status}
                            label={tabLabel}
                            id={st.tab}
                            key={tab.name}
                        />
                    );
                })}
            </Tabs>
        </Box>
    );
}
