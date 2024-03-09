import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Spinner } from "src/components";
import { Layout } from "src/layout/Layout";

const HomePage = lazy(() => import("src/pages/Home/HomePage"));
const ErrorPage = lazy(() => import("src/pages/Error/ErrorPage"));

export const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
