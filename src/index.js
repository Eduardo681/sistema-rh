import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CadastroVaga from "./pages/CadastroVaga";
import "./sass/index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CadastroVaga />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);