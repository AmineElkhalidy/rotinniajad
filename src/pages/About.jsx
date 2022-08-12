import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about section">
      <h2 className="section__title">
        À Propos de <span>Nous</span>
      </h2>

      <div className="about__container container grid"></div>
    </section>
  );
};

export default About;
