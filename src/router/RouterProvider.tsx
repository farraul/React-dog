import { RouterProvider as Provider } from "react-router-dom";

import { routesConfig } from "./routesConfig";

const RouterProvider = () => {
  return (
    // <Suspense fallback={<Spinner />}>
    <Provider router={routesConfig} />
    // </Suspense>
  );
};

export default RouterProvider;
