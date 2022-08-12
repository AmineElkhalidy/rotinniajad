import React from "react";
import "./Product.scss";

// motion
import { motion } from "framer-motion";

const Product = ({ image }) => {
  return (
    <motion.article
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      itemScope
      itemType="https://schema.org/Product"
      className="card"
    >
      <img itemProp="image" src={image} alt="Salon" className="card__img" />

      <div className="card__buttons-container">
        <div className="card__buttons">
          <a href="tel: +212661044847" className="card__button">
            <i class="ri-phone-line"></i>
          </a>
          <a href="https://wa.me/212661044847" className="card__button">
            <i class="ri-whatsapp-line"></i>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Product;
