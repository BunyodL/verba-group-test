import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { setAuth } from "../../../redux/slices/authSlice";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../utils/regex";
import { useAppDispatch } from "./../../../hooks/redux-hooks";

export const useFormManagement = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email is required")
            .matches(EMAIL_REGEX, "Invalid email format"),
        password: yup
            .string()
            .min(8, "Password should be of minimum 8 characters length")
            .max(30, "Password should be of maximum 30 characters length")
            .matches(/^[A-Z]/, "Password must start with a capital letter") // Проверка на первый символ - буква
            .matches(/\d/, "Password must contain at least one digit") // Проверка на наличие хотя бы одной цифры
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "foobar@example.com",
            password: "Foobar123",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const isEmailValid = EMAIL_REGEX.test(values.email);
            const isPasswordValid = PASSWORD_REGEX.test(values.password);
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
