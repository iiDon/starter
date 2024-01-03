import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/dashboard/index.tsx";
import "./styles/globals.css";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./error.tsx";
import Users from "./pages/dashboard/users.tsx";
import Layout from "./components/Layouts/Layout.tsx";
import SignIn from "./pages/auth/signIn.tsx";
import SignUp from "./pages/auth/signUp.tsx";
import Unauthorized from "./components/Unauthorized.tsx";
import Protected from "./components/Protected.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <Protected>
        <Layout />
      </Protected>
    ),
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
  {
    path: "/auth/",
    children: [
      {
        path: "signIn",
        element: (
          <Unauthorized>
            <SignIn />
          </Unauthorized>
        ),
      },
      {
        path: "signUp",

        element: (
          <Unauthorized>
            <SignUp />
          </Unauthorized>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
