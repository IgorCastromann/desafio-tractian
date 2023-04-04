import { Outlet, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { BaseLayout } from "@src/layouts/Base";

const Home = lazy(() => import("@src/pages/Home"));

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
