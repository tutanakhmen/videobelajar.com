import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Category from "../pages/Category";
import Profile from "../pages/Profile";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "category",
        element: <Category />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "*",
    element: <Page404 />,
  },
]);
