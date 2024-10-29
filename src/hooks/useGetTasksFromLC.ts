import { useEffect } from "react";
import { setTasks } from "../redux/slices/tasksSlice";
import { useAppDispatch } from "./redux-hooks";

export const useGetTasksFromLC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const stringifiedTasks = localStorage.getItem("tasks");
        if (stringifiedTasks) {
            const tasks = JSON.parse(stringifiedTasks);
            dispatch(setTasks(tasks || []));
        }
    }, [dispatch]);
};
