import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

import Home from "./pages/Home";
import Program from "./pages/Program";
import NotFound from "./pages/NotFound.jsx";

// https://reactrouter.com/6.29.0/route/route
// https://reactrouter.com/6.29.0/route/loader
const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "program/:url_alias",
          element: <Program />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
