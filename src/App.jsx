import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage, { loader as productsLoader } from "./pages/Home";
import ErrorPage from "./pages/Error";
import Loader from "./components/Loader";

const ProductsRootPage = lazy(() => import("./pages/ProductsRoot"));
const ProductsPage = lazy(() => import("./pages/Products"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: productsLoader,
        },
        {
          path: "products",
          element: (
            <Suspense fallback={<Loader />}>
              <ProductsRootPage />
            </Suspense>
          ),
          loader: productsLoader,
          id: "products",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <ProductsPage />
                </Suspense>
              ),
            },
            {
              path: ":productId",
              element: (
                <Suspense fallback={<Loader />}>
                  <ProductDetailPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
