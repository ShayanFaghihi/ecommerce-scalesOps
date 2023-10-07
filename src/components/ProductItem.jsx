import React from "react";
import { useNavigation } from "react-router-dom";
import Container from "./Container";

const ProductItem = ({ product }) => {
  const { title, price, description, category, image } = product;

  return (
    <Container>
      <div
        className="row"
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <div className="col-lg-6 col-md-6">
          <img
            src={image}
            alt={title}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <h1 className="h1">{title}</h1>
          <small>🏷️ {category}</small>
          <p className="fs-2">${price}</p>
          <p className="text-secondary">{description}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductItem;
