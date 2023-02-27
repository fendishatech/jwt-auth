import { createBrowserRouter } from "react-router-dom";
import { Layout, Dashboard, Login } from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
