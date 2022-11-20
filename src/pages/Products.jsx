import React from "react";
import "./Products.scss";

// MetaTags
import { Helmet } from "react-helmet";

// motion
import { motion } from "framer-motion";

// Images
import { images } from ".";

// Product
import { Product } from "../components";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Nos Produits</title>
      </Helmet>

      <section className="products section">
        <h2 className="section__title products__title">
          Nos <span>Produits</span>
        </h2>

        <motion.div whileInView={{ opacity: [0, 1] }} className="flexed">
          <div className="products__container">
            {images.map((image, index) => (
              <Product key={index} image={image} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Products;
