import { filterTasks } from "../utils/helper";
import { useAppSelector } from "./redux-hooks";

export const useTasks = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    const currentTab = useAppSelector((state) => state.navbar.tab);

    return filterTasks(currentTab, tasks);
};
