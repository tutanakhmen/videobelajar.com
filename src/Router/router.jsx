import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Category from "../pages/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },

      {
        path: "register",
        element: <Register /> 
      },

      {
        path: "login", 
        element: <Login /> 
      },

      {
        path: "category", 
        element: <Category />
      }
    ],
  },

  {
    path: "*", 
    element: <Page404 /> 
  }
]);
