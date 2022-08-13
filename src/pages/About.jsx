import React from "react";
import "./About.scss";

import AboutImg from "../assets/images/rotin.jpg";

const About = () => {
  return (
    <section className="about section">
      <h2 className="section__title">
        À Propos de <span>Nous</span>
      </h2>

      <div className="about__container container grid">
        <div className="about__data grid">
          <div className="about__content ">
            <h3 className="about__title">
              <span>R</span>o<span>t</span>in <span>N</span>i<span>a</span>ja
              <span>d</span>
            </h3>
            <p className="about__description">
              Rotin Niajad est un ensemble de personnes qualifiées, réunies pour
              fabriquer des produits maison époustouflants, livrés aux clients
              avec la meilleure qualité.
            </p>
          </div>

          <img src={AboutImg} alt="Le magasin" className="about__img" />
        </div>

        <div className="video__container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/DNlwRlHQ-Qk?autoplay=1&mute=1"
            frameborder="0"
          ></iframe>
        </div>

        {/* <div className="profile">
          <img src={AboutImg} alt="Profile" className="profile__img" />

          <div className="profile__data">
            <h3 className="profile__name">Omar Haqouq</h3>
            <p className="profile__description">Le gérant de Rotin Niajad</p>

            <div className="profile__info">
              <div>
                <span className="profile__info-title">10+</span>
                <span className="profile__info-name">
                  Years <br />
                  experience
                </span>
              </div>

              <div>
                <span className="profile__info-title">50+</span>
                <span className="profile__info-name">
                  Completed <br /> project
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
