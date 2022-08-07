import React from "react";
import "./Home.scss";

// Routing
import { Link } from "react-router-dom";

// Icons
import { FaCouch } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home section">
      <div className="home__container container grid">
        <div className="home__image">
          <FaCouch />
        </div>

        <div className="home__data">
          <h1 className="home__title">
            Welcome to <span>Rotin</span>
          </h1>

          <p className="home__description">
            The best place to shop home furniture.
          </p>

          <Link to="/products" className="button home__button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
