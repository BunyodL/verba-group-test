import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { store } from "./store";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
            </>
        ),
    },
    {
        path: "/login",
        element: (
            <>
                <Header />
                <Login />
            </>
        ),
    },
]);

export const Providers = () => {
    return (
        <main>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </main>
    );
};
