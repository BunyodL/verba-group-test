import { TabStatus } from "../redux/slices/navbarSlice";
import { filterTasks } from "../utils/helper";
import { useAppSelector } from "./redux-hooks";

type TotalTasks = {
    [K in TabStatus as string & K]: number;
};

export const useTotalTabTasks = () => {
    const tabs = useAppSelector((state) => state.navbar.tabs);
    const allTasks = useAppSelector((state) => state.tasks.tasks);

    return tabs.reduce((acc, tab) => {
        const totalTasks = filterTasks(tab.status, allTasks).length;
        acc[tab.status] = totalTasks as number;
        return acc;
    }, {} as TotalTasks);
};
