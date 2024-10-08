import { createBrowserRouter, Navigate } from "react-router-dom";
import ReactTopLoader from "./components/ReactTopLoader.tsx";
import { RequireLoggedIn, RequireLoggedOut } from "./hoc/RouteDecorators.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.tsx";
import GraphPage from "./pages/GraphPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import { getCatalogues } from "./routes/catalogue.ts";
import { getExim } from "./routes/exim.ts";

export const getBrowserRouter = createBrowserRouter([
  {
    element: <ReactTopLoader />,
    children: [
      {
        element: <RequireLoggedOut />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/forgot-password",
            element: <ForgotPasswordPage />,
          },
        ],
      },
      {
        element: <RequireLoggedIn />,
        children: [
          {
            index: true,
            path: "/",
            element: <Navigate to="/dashboard" />,
          },
          {
            path: "/dashboard",
            element: <DashboardPage />,
            loader: getCatalogues,
          },
          {
            path: "/view-graph",
            element: <GraphPage />,
            loader: getExim,
          },
        ],
      },
    ],
  },
]);
