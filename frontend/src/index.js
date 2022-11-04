import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import CadastroVaga from "./pages/CadastroVaga";
import "./sass/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/cadastrar-vaga" />
  },
  {
    path: "/cadastrar-vaga",
    element: <CadastroVaga />,
  },
  {
    path: "/cadastrar-empresa",
    element: <CadastroEmpresa />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);