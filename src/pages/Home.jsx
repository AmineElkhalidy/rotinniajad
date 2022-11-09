import React from "react";
import "./Home.scss";

// MetaTags
import { Helmet } from "react-helmet";

// Typeit effect
import TypeIt from "typeit-react";

// Routing
import { Link } from "react-router-dom";

// Motion
import { motion } from "framer-motion";

// Icons
import { FaCouch } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Si vous souhaitez nous joindre, n'hésitez pas à utiliser les ressources listées, ou le formulaire"
        />
        <title>Rotin Niajad - Meuble de maison</title>
      </Helmet>

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
            <h1 className="home__title">
              <TypeIt
                options={{
                  afterComplete: function (instance) {
                    instance.destroy();
                  },
                }}
              >
                rotin niajad ~ Meuble de maison
              </TypeIt>
            </h1>

            <p className="home__description">
              Le meilleur endroit pour acheter des meubles de maison.
            </p>

            <motion.div whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }}>
              <Link to="/products" className="button home__button">
                découvrir nos produits
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
