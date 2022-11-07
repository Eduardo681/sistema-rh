import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import CadastroVaga from "./pages/CadastroVaga";
import "./sass/index.scss";
import axios from 'axios';
import CadastroTeste from "./pages/CadastroTeste";


axios.defaults.baseURL = 'http://localhost:3004';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
  {
    path: "/cadastrar-teste",
    element: <CadastroTeste />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);