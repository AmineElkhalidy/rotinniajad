import React from "react";
import "./About.scss";

// MetaTags
import { Helmet } from "react-helmet";

// Image
import AboutImg from "../assets/images/rotin.jpg";

// motion
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Découvrez qui nous sommes, ce que nous faisons, où nous sommes situés à l'aide d'une vidéo youtuber..."
        />

        <title>À Propos de Nous</title>
      </Helmet>
      <section className="about section">
        <h2 className="section__title">
          À Propos de <span>Nous</span>
        </h2>

        <div className="about__container container grid">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [-100, 0] }}
            className="about__data grid"
          >
            <div className="about__content ">
              <h3 className="about__title">Rotin Niajad</h3>
              <p className="about__description">
                Rotin Niajad est un ensemble de personnes qualifiées, réunies
                pour fabriquer des produits maison époustouflants, livrés aux
                clients avec la meilleure qualité.
              </p>
            </div>

            <img src={AboutImg} alt="Le magasin" className="about__img" />
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ y: [100, 0] }}
            className="video__container"
          >
            <iframe
              className="video"
              src="https://www.youtube.com/embed/DNlwRlHQ-Qk?autoplay=1&mute=1"
              frameBorder="0"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
