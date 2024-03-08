import { RouterProvider as Provider } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import { Spinner } from "src/components";
import { Suspense } from "react";

const RouterProvider = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider router={routesConfig} />
    </Suspense>
  );
};

export default RouterProvider;
