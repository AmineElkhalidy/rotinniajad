import React from "react";
import "./Products.scss";

// Images
import { images } from ".";

// Product
import { Product } from "../components";

const Products = () => {
  return (
    <section className="products section">
      <h2 className="section__title products__title">
        Our <span>Products</span>
      </h2>

      <div className="products__container container grid">
        {images.map((image, index) => (
          <Product key={index} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Products;
