import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { useAuthCheck } from "../../hooks";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setAuth } from "../../redux/slices/authSlice";

export default function Header() {
    useAuthCheck();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const dispatch = useAppDispatch();

    const handleQuit = () => {
        dispatch(setAuth(false));
        localStorage.removeItem("auth");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    <Link to={isHomePage ? "/login" : "/"}>
                        <Button
                            color="inherit"
                            onClick={handleQuit}
                        >
                            {isHomePage ? "Quit" : "Home"}
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
