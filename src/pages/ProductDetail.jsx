import React, { Suspense } from "react";
import { Await, useLoaderData, useRouteLoaderData } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Loader from "../components/Loader";

const ProductDetailPage = () => {
  const data = useRouteLoaderData("products");

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={data.products}>
        {(productItem) => <ProductItem product={productItem} />}
      </Await>
    </Suspense>
  );
};

export default ProductDetailPage;
