import { useTasks } from "../../hooks";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { deleteTask, doneTask } from "../../redux/slices/tasksSlice";
import { Task } from "../task";

const TasksList = () => {
    const dispatch = useAppDispatch();
    const tasks = useTasks();

    const handleDoneTask = (taskId: number) => {
        dispatch(doneTask(taskId));
    };

    const handleDeleteTask = (taskId: number) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div>
            {tasks.map((task) => (
                <Task
                    {...task}
                    onDoneTask={handleDoneTask}
                    onDeleteTask={handleDeleteTask}
                    key={task.id}
                />
            ))}
        </div>
    );
};

export default TasksList;
