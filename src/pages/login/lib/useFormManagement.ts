import { useFormik } from "formik";
import * as yup from "yup";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../../utils/regex";

export const useFormManagement = () => {
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
            password: "foobar",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const isEmailValid = EMAIL_REGEX.test(values.email);
            const isPasswordValid = PASSWORD_REGEX.test(values.password);

            if (isEmailValid && isPasswordValid) {
                alert(JSON.stringify(values, null, 2));
            }
        },
    });

    return formik;
};
