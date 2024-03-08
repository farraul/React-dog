import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Spinner } from "src/components";
import { Layout } from "src/layout/Layout";
import { HomePage } from "src/pages/HomePage";
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
    ],
  },
]);
