import { Task as ITask } from "../../redux/slices/tasksSlice";
import st from "./Task.module.css";

const Task = ({ status, text }: ITask) => {
    return (
        <div className={st.task}>
            <span>{text}</span>
            <span>{status}</span>
        </div>
    );
};

export default Task;
