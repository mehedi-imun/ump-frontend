import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    // children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    // children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    // children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    // element: <Login />,
  },
  {
    path: "/register",
    // element: <Register />,
  },
]);

export default router;
