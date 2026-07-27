import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./styles/index.css";
// import router from "../src/Router/router";
import { router } from './Router/router';

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,

);
