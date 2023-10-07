import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ProductsPage, { loader as productsLoader } from "./pages/Products";
import ErrorPage from "./pages/Error";
import ProductDetailPage, {
  loader as singleProductLoader,
} from "./pages/ProductDetail";
import ProductsRootPage from "./pages/ProductsRoot";

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
          element: <ProductsRootPage />,
          children: [
            {
              index: true,
              element: <ProductsPage />,
              loader: productsLoader,
            },
            {
              path: ":productId",
              element: <ProductDetailPage />,
              loader: singleProductLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
