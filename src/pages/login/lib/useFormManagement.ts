import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { setAuth } from "../../../redux/slices/authSlice";
import { useAppDispatch } from "./../../../hooks/redux-hooks";

export const useFormManagement = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const validationSchema = yup.object({
        email: yup.string().required("Email is required").equals(["admin"], "Invalid email"),
        password: yup.string().required("Password is required").equals(["admin"], "Invalid password"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const isEmailValid = values.email === "admin";
            const isPasswordValid = values.password === "admin";
            setIsLoading(true);

            if (isEmailValid && isPasswordValid) {
                dispatch(setAuth(true));
                localStorage.setItem("auth", JSON.stringify(true));
                alert(JSON.stringify(values, null, 2));
            }
            setTimeout(() => {
                setIsLoading(false);
                navigate("/");
            }, 2000);
        },
    });

    return { formik, isLoading };
};
