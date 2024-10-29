import { useAppSelector } from "./redux-hooks";

export const useTasks = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    const currentTab = useAppSelector((state) => state.navbar.tab);

    switch (currentTab) {
        case "current": {
            return tasks.filter((task) => task.status === "active");
        }
        case "done": {
            return tasks.filter((task) => task.status === "done");
        }
        case "deleted": {
            return tasks.filter((task) => task.status === "deleted");
        }
        default:
            return tasks;
    }
};
