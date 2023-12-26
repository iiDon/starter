import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./error.tsx";
import Users from "./users.tsx";
import Layout from "./components/Layouts/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
