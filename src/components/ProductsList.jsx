import React, { useState, useEffect } from "react";
import ProductBox from "./ProductBox";
import { useNavigation } from "react-router-dom";
import Container from "./Container";

const ProductsList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [productsList, setProductsList] = useState(products);

  // Function to handle the selection change
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

    if (selectedValue !== "") {
      const newProducts = products.filter(
        (product) => product.category === selectedValue
      );
      setProductsList(newProducts);
    }
  };

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
          throw new Error("Error in getting categories");
        } else {
          const categories = await response.json();
          setCategories(categories);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  const navigation = useNavigation();
  return (
    <Container>
      {navigation.state === "loading" ? (
        <div className="text-center">Loading</div>
      ) : (
        <>
          <h1 className="mb-3 h1">Products</h1>
          <div className="mb-3">
            <label htmlFor="selectCategory">Filter Product Category</label>
            <select
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <ul className="row list-unstyled gx-5 gy-5">
            {productsList.map((product) => (
              <li
                className="col-lg-3 col-md-4 col-sm-6 col-12 p-3 border shadow-sm"
                key={product.id}
              >
                <ProductBox productData={product} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Container>
  );
};

export default ProductsList;
