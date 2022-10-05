import React, { useEffect } from "react";
import "./Contact.scss";

// MetaTags
import MetaTags from "react-meta-tags";

// Motion
import { motion } from "framer-motion";

// Form Spree
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpznzzen");

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, []);

  return (
    <>
      <MetaTags>
        <title>Contactez-nous</title>
        <meta
          name="description"
          content="Si vous souhaitez nous joindre, n'hésitez pas à utiliser les ressources listées, ou le formulaire"
        />
      </MetaTags>

      <motion.div className="contact">
        <motion.div className="form">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ x: [-100, 0] }}
            className="contact-info"
          >
            <h3 className="title">Prenons contact</h3>
            <p className="text">
              Si vous avez aimé nos produits, n'hésitez pas à nous contacter en
              utilisant les ressources suivantes et nous nous occuperons du
              reste...
            </p>

            <div className="info">
              <div className="information">
                <i className="ri-map-pin-line icon"></i>
                <a
                  href="https://www.google.com/maps/place/Rotin+Niajad/@32.6792076,-8.8043281,8z/data=!4m19!1m13!4m12!1m4!2m2!1d-8.0370256!2d31.6411532!4e1!1m6!1m2!1s0xda7a70a675dd0a5:0x81ebaeb50fc5eda5!2sRotin+niajad!2m2!1d-7.3321858!2d33.7278948!3m4!1s0xda7a70a675dd0a5:0x81ebaeb50fc5eda5!8m2!3d33.7278948!4d-7.3321858"
                  target="_blank"
                >
                  Mimosa, Route Nationale N322, Mohammédia 13006
                </a>
              </div>
              <div className="information">
                <i className="ri-mail-line icon"></i>
                <a href="mailto:someone@example.com" target="_blank">
                  rotinniajad@gmail.com
                </a>
              </div>
              <div className="information">
                <i className="ri-phone-line icon"></i>
                <a href="tel: +212661044847" target="_blank">
                  +212707090524
                </a>
              </div>
            </div>

            <div className="social-media">
              <p>Connectez-vous avec nous sur:</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/RotinNiajad/" target="_blank">
                  <i className="ri-facebook-line"></i>
                </a>
                <a
                  href="https://www.instagram.com/rotin_niajad/"
                  target="_blank"
                >
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://wa.me/212707090524" target="_blank">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ x: [100, 0] }}
            className="contact-form"
          >
            <span className="circle one"></span>
            <span className="circle two"></span>

            {!state.succeeded ? (
              <form
                action="https://formspree.io/f/xpznzzen"
                method="POST"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h3 className="title">Contactez-nous</h3>
                <div className="input-container">
                  <input
                    type="text"
                    name="fullname"
                    className="input"
                    required
                  />
                  <label htmlFor="">Nom complet</label>
                  <span>Nom Complet</span>
                  <ValidationError
                    prefix="Fullname"
                    field="fullname"
                    errors={state.errors}
                  />
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" required />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" required />
                  <label htmlFor="">Téléphone</label>
                  <span>Téléphone</span>
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
                <div className="input-container textarea">
                  <textarea
                    name="message"
                    className="input"
                    required
                  ></textarea>
                  <label htmlFor="">Message</label>
                  <span>Message</span>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className="button form__button"
                  disabled={state.submitting}
                >
                  Envoyer <i className="ri-send-plane-line"></i>
                </button>
              </form>
            ) : (
              <div className="form__message">
                <h2>
                  Merci pour votre message, nous vous recontacterons dans les
                  plus brefs délais.
                </h2>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
