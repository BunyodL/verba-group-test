import { useTasks } from "../../hooks";
import { Task } from "../task";

const TasksList = () => {
    const tasks = useTasks();

    return (
        <div>
            {tasks.map((task) => (
                <Task
                    {...task}
                    key={task.id}
                />
            ))}
        </div>
    );
};

export default TasksList;
