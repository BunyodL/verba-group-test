import { useTasks } from "../../hooks";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { deleteTask, doneTask } from "../../redux/slices/tasksSlice";
import { Task } from "../task";
import st from "./TasksList.module.css";

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
        <div className={tasks.length > 0 ? st.tasksList : ""}>
            {tasks.length > 0
                ? tasks.map((task) => (
                      <Task
                          {...task}
                          onDoneTask={handleDoneTask}
                          onDeleteTask={handleDeleteTask}
                          key={task.id}
                      />
                  ))
                : "Задач нет, пополните список..."}
        </div>
    );
};

export default TasksList;
