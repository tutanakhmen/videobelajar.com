import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../pages/Register";

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
      }
    ],
  },
]);
