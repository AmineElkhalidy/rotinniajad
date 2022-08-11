import React from "react";
import "./Product.scss";

const Product = ({ image }) => {
  return (
    <article className="card">
      <img src={image} alt="The product image..." className="card__img" />

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
    </article>
  );
};

export default Product;
