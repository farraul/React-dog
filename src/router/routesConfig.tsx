import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "src/pages/HomePage";
export const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    //   children: [
    //     {
    //       index: true,
    //       element: (
    //         <Suspense fallback={<Spinner />}>
    //           <KeywordsPage />
    //         </Suspense>
    //       ),
    //     },
    // ]
  },
]);
