import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TaskStatus = "active" | "done" | "deleted";
type Task = {
    id: number;
    status: TaskStatus;
    text: string;
};

export interface TasksSlice {
    tasks: Task[];
}

const initialState: TasksSlice = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Task["text"]>) {
            const task: Task = {
                id: state.tasks.length + 1,
                status: "active",
                text: action.payload,
            };
            const newTasks = [...state.tasks, task];
            state.tasks = newTasks;
        },
        deleteTask(state, action: PayloadAction<Task["id"]>) {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        status: "deleted",
                    } as Task;
                }
                return task;
            });
        },
        doneTask(state, action: PayloadAction<Task["id"]>) {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        status: "done",
                    } as Task;
                }
                return task;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, doneTask } = tasksSlice.actions;

export default tasksSlice.reducer;
