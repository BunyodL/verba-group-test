import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TaskStatus = "active" | "done" | "deleted";
export type Task = {
    id: number;
    status: TaskStatus;
    text: string;
};

export interface TasksSlice {
    tasks: Task[];
}

const initialState: TasksSlice = {
    tasks: [
        // {
        //     id: 1,
        //     status: "active",
        //     text: "phone",
        // },
        // {
        //     id: 2,
        //     status: "deleted",
        //     text: "computer",
        // },
        // {
        //     id: 3,
        //     status: "done",
        //     text: "bookasdasdassa",
        // },
        // {
        //     id: 4,
        //     status: "done",
        //     text: "dinner",
        // },
        // {
        //     id: 5,
        //     status: "active",
        //     text: "component",
        // },
        // {
        //     id: 6,
        //     status: "deleted",
        //     text: "active",
        // },
        // {
        //     id: 7,
        //     status: "done",
        //     text: "asdnssssssssssssssssaxjjhjhkhqiwu",
        // },
        // {
        //     id: 8,
        //     status: "active",
        //     text: "qqqqqqqqqqqqqqqqqqqqqqq",
        // },
    ],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks(state, action: PayloadAction<Task[]>) {
            state.tasks = action.payload;
        },
        addTask(state, action: PayloadAction<Task["text"]>) {
            const task: Task = {
                id: state.tasks.length + 1,
                status: "active",
                text: action.payload,
            };
            const newTasks = [...state.tasks, task];
            state.tasks = newTasks;
            localStorage.setItem("tasks", JSON.stringify(newTasks));
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
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
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
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        clearTasks(state) {
            state.tasks = initialState.tasks;
            localStorage.removeItem("tasks");
        },
    },
});

// Action creators are generated for each case reducer function
export const { setTasks, addTask, deleteTask, doneTask, clearTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
