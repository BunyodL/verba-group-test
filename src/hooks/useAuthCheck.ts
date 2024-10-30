import { useNavigate } from "react-router-dom";
import { setAuth } from "../redux/slices/authSlice";
import { useAppDispatch } from "./redux-hooks";
import { useEffect } from "react";

export const useAuthCheck = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const isAuth = localStorage.getItem("auth");
        if (!isAuth) return navigate("/login");
        const parsedIsAuth = JSON.parse(isAuth);

        if (parsedIsAuth) {
            dispatch(setAuth(true));
            navigate("/");
        } else {
            localStorage.removeItem("auth");
            navigate("/login");
        }
    }, [dispatch, navigate]);
};
