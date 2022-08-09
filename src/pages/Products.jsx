import React from "react";
import "./Products.scss";

// Product
import { Product } from "../components";

const Products = () => {
  return (
    <section className="products section">
      <h2 className="section__title products__title">
        Our <span>Products</span>
      </h2>

      <div className="products__container container grid"></div>
    </section>
  );
};

export default Products;
