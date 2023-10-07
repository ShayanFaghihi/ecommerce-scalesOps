import React from "react";
import { Link } from "react-router-dom";

const ProductBox = ({ productData }) => {
  const { id, title, price, category, image } = productData;

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <img
        className="w-100"
        style={{ height: "200px", objectFit: "contain" }}
        src={image}
        alt={title}
      />
      <h2 className="text-secondary text-capitalize fs-5 h2">{title}</h2>
      <p>${price}</p>
      <p>🏷️ {category}</p>
      <Link
        type="button"
        className="btn btn-info text-white d-inline-block"
        to={`/products/${id}`}
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductBox;
