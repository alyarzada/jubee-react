// routes
import RootLayout from "../layout";
import Home from "../pages/home";
import Tasks from "../pages/tasks";

// type
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,

      },
      { path: "tasks", element: <Tasks /> },
    ],
  },
];
