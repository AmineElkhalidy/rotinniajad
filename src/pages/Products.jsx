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
      {/* <Helmet>
        <meta
          name="description"
          content="Découvrez nos derniers produits fabriqués avec qualité..."
        />
        <title>Nos Produits</title>
      </Helmet> */}

      <section className="products section">
        <h2 className="section__title products__title">
          Nos <span>Produits</span>
        </h2>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          className="products__container container grid"
        >
          {images.map((image, index) => (
            <Product key={index} image={image} />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Products;
