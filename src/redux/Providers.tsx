import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export const Providers = () => {
    return (
        <main>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </main>
    );
};
