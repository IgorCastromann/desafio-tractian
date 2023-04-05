import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BaseLayout } from "@src/layouts/Base";

const Dashboard = lazy(() => import("@src/pages/Dashboard"));
const Users = lazy(() => import("@src/pages/Users"));
const Assets = lazy(() => import("@src/pages/Assets"));
const Companies = lazy(() => import("@src/pages/Companies"));
const Units = lazy(() => import("@src/pages/Units"));

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <Suspense fallback={"carregando..."}>
          <Outlet />
        </Suspense>
      </BaseLayout>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/assets",
        element: <Assets />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/units",
        element: <Units />,
      },
    ],
  },
]);
