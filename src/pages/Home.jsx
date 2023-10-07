import React from "react";
import { useLoaderData } from "react-router-dom";
import headerImage from "../assets/header.jpg";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  const products = useLoaderData();

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
      <ProductsList products={products} />
    </>
  );
};

export default HomePage;
