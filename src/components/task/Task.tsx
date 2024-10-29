import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { Task as ITask } from "../../redux/slices/tasksSlice";
import st from "./Task.module.css";

type TaskProps = ITask & {
    onDoneTask: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
};

const Task = ({ text, id, onDeleteTask, onDoneTask }: TaskProps) => {
    return (
        <div className={st.task}>
            <span className={st.text}>{text}</span>
            <div className={st.buttons}>
                <DoneIcon
                    color="action"
                    className={st.button}
                    onClick={() => onDoneTask(id)}
                    sx={{
                        width: "40px",
                        height: "40px",
                    }}
                />
                <DeleteIcon
                    color="action"
                    className={st.button}
                    onClick={() => onDeleteTask(id)}
                    sx={{
                        width: "40px",
                        height: "40px",
                    }}
                />
            </div>
        </div>
    );
};

export default Task;
