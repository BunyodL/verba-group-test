import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, TextField } from "@mui/material";
import { Paper } from "../paper";
import st from "./ControlPanel.module.css";
import { ChangeEvent, useState } from "react";

const ControlPanel = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Paper className={st["control-panel"]}>
            <Button
                variant="contained"
                size="small"
            >
                <AddIcon />
                <span>Добавить</span>
            </Button>
            <TextField
                variant="standard"
                value={inputValue}
                onChange={handleChange}
                placeholder="Пополните список..."
                id={st.textfield}
            />
            <Button
                size="small"
                variant="contained"
                color="error"
                sx={{
                    display: "flex",
                }}
            >
                <span>Очистить</span>
                <MenuIcon
                    sx={{
                        display: "flex",
                    }}
                />
            </Button>
        </Paper>
    );
};

export default ControlPanel;
