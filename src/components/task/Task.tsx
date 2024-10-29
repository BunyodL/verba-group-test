import { Task as ITask } from "../../redux/slices/tasksSlice";
import st from "./Task.module.css";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

type TaskProps = ITask & {
    onDoneTask: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
};

const Task = ({ text, id, onDeleteTask, onDoneTask }: TaskProps) => {
    return (
        <div className={st.task}>
            <span>{text}</span>
            <div>
                <Button onClick={() => onDoneTask(id)}>
                    <DoneIcon color="action" />
                </Button>
                <Button onClick={() => onDeleteTask(id)}>
                    <DeleteIcon color="action" />
                </Button>
            </div>
        </div>
    );
};

export default Task;
