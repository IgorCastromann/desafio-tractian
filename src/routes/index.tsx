import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BaseLayout } from "@src/layouts/Base";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@src/components/Error";

const Dashboard = lazy(() => import("@src/pages/Dashboard"));
const Users = lazy(() => import("@src/pages/Users"));
const Assets = lazy(() => import("@src/pages/Assets"));
const AssetsDetails = lazy(() => import("@src/pages/Assets/Details"));
const Companies = lazy(() => import("@src/pages/Companies"));
const Units = lazy(() => import("@src/pages/Units"));
const WorkOrders = lazy(() => import("@src/pages/WorkOrders"));

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary fallback={<ErrorFallback />}>
        <BaseLayout>
          <Suspense fallback={"carregando..."}>
            <Outlet />
          </Suspense>
        </BaseLayout>
      </ErrorBoundary>
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
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Assets />,
          },
          {
            path: ":id",
            element: <AssetsDetails />,
          },
        ],
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/units",
        element: <Units />,
      },
      {
        path: "/workorders",
        element: <WorkOrders />,
      },
    ],
  },
]);
