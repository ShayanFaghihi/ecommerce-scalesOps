import React from "react";
import { useLoaderData, json } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const products = useLoaderData();
  return <ProductsList products={products} />;
};

export default ProductsPage;

export const loader = async ({ request, params }) => {
  const response = await fetch("https://fakestoreapi.com/products/");

  if (!response.ok) {
    throw json({ message: "Error in getting Products" }, { status: 404 });
  } else {
    const products = await response.json();
    return products;
  }
};
