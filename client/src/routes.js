import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FunkoInfo from "./components/FunkoInfo";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/funko/:funko_id", element: <FunkoInfo /> },
]);
