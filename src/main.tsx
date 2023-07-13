import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import MuiThemeProvider from "./theme";

import "./styles/index.css";

// define routes
const router = createBrowserRouter(routes);

// query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <MuiThemeProvider>
      <RouterProvider router={router} />
    </MuiThemeProvider>
  </QueryClientProvider>,
);
