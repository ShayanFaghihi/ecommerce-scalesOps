import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import Loader from "../components/Loader";

const ProductsPage = () => {
  const data = useRouteLoaderData("products");
  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data.products}>
        {(productsList) => <ProductsList products={productsList} />}
      </Await>
    </Suspense>
  );
};

export default ProductsPage;
