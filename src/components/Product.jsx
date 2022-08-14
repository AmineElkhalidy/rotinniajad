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
          <a href="tel: +212707090524" className="card__button">
            <i className="ri-smartphone-line"></i>
          </a>

          <a href="tel: +212521005667" className="card__button">
            <i className="ri-phone-line"></i>
          </a>

          <a href="https://wa.me/212705099002" className="card__button">
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Product;
