import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const ProductDetailPage = () => {
  const product = useLoaderData();

  return <ProductItem product={product} />;
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
  const productId = params.productId;
  const response = await fetch(
    "https://fakestoreapi.com/products/" + productId
  );

  if (!response.ok) {
    throw json({ message: "Error in getting Products" }, { status: 404 });
  } else {
    const products = await response.json();
    return products;
  }
};
