import { TabStatus } from "../redux/slices/navbarSlice";
import { Task } from "../redux/slices/tasksSlice";

export const filterTasks = (currentTab: TabStatus, allTasks: Task[]) => {
    switch (currentTab) {
        case "current": {
            return allTasks.filter((task) => task.status === "active");
        }
        case "done": {
            return allTasks.filter((task) => task.status === "done");
        }
        case "deleted": {
            return allTasks.filter((task) => task.status === "deleted");
        }
        default:
            return allTasks;
    }
};
