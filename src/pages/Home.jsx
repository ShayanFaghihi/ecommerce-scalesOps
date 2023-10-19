import React, { Suspense } from "react";
import { Await, useLoaderData, defer } from "react-router-dom";
import headerImage from "../assets/header.jpg";
import ProductsList from "../components/ProductsList";
import Loader from "../components/Loader";

const HomePage = () => {
  const data = useLoaderData();

  const headerStyle = {
    maxHeight: "50vh",
    backgroundColor: "#000",
    backgroundBlendMode: "multiply",
    filter: "brightness(.5)",
    marginBottom: "2rem",
  };

  return (
    <>
      <img
        className="w-100 object-fit-cover bg-primary-dark d-block"
        style={headerStyle}
        src={headerImage}
        alt="E-commerce desk"
      />
      <Suspense fallback={<Loader />}>
        <Await resolve={data.products}>
          {(productsList) => <ProductsList products={productsList} />}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;

const getProducts = async (productId) => {
  let url = "https://fakestoreapi.com/products/";

  if (productId) {
    url += productId;
  }
  const response = await fetch(url);

  if (!response.ok) {
    throw json({ message: "Error in getting Products" }, { status: 404 });
  } else {
    const products = await response.json();
    return products;
  }
};

export const loader = ({ params }) => {
  const productId = params.productId;

  return defer({ products: getProducts(productId) });
};
