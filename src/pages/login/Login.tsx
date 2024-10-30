import { Button, Checkbox, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Paper } from "../../components/paper";
import { useFormManagement } from "./lib/useFormManagement";
import st from "./Login.module.css";

export const Login = () => {
    const { formik, isLoading } = useFormManagement();
    const [showPassword, setShowPassword] = useState(false);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowPassword(event.target.checked);
    };

    return (
        <section className={st["login-section"]}>
            <Paper className={st.login}>
                <h1 className={st.title}>Авторизуйтесь</h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className={st.form}
                >
                    <TextField
                        fullWidth
                        id={st.email}
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id={st.password}
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <div className={st["checkbox-wrapper"]}>
                        <Checkbox
                            id={st.showPassword}
                            value={showPassword}
                            onChange={handleCheckboxChange}
                        />
                        <span>Показать пароль</span>
                    </div>
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Идет загрузка..." : "Войти"}
                    </Button>
                </form>
            </Paper>
        </section>
    );
};
