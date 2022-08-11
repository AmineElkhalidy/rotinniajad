import React from "react";
import "./Home.scss";

// Routing
import { Link } from "react-router-dom";

// Motion
import { motion } from "framer-motion";

// Icons
import { FaCouch } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container container grid">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          animate={{ x: [100, 0] }}
          className="home__image"
        >
          <FaCouch />
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          animate={{ x: [-100, 0] }}
          className="home__data"
        >
          <h2 className="home__subtitle">Welcome to</h2>
          <h1 className="home__title">Rotin Niajad</h1>

          <p className="home__description">
            The best place to shop home furniture.
          </p>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/products" className="button home__button">
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
