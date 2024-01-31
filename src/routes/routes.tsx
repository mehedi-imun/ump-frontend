import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import CreateStudent from "../pages/admin/CreateStudent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about-us",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <CreateStudent />,
      },
    ],
  },
]);

export default router;
