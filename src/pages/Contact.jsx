import React, { useEffect } from "react";
import "./Contact.scss";

// Motion
import { motion } from "framer-motion";

// Form Spree
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpznzzen");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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
    <motion.div className="contact">
      <motion.div className="form">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          animate={{ y: [100, 0] }}
          className="contact-info"
        >
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            If you liked our products, do not hesitate to contact us using the
            following resources and we will handle the rest...
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
                omarhaqouq@gmail.com
              </a>
            </div>
            <div className="information">
              <i className="ri-phone-line icon"></i>
              <a href="tel: +212661044847" target="_blank">
                +212661-044847
              </a>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/RotinNiajad/" target="_blank">
                <i class="ri-facebook-line"></i>
              </a>
              <a href="https://www.instagram.com/rotin_niajad/" target="_blank">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="https://wa.me/212661044847" target="_blank">
                <i class="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form
            action="https://formspree.io/f/xpznzzen"
            method="POST"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="fullname" className="input" required />
              <label for="">Full Name</label>
              <span>Username</span>
              <ValidationError
                prefix="Fullname"
                field="fullname"
                errors={state.errors}
              />
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" required />
              <label for="">Email</label>
              <span>Email</span>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" required />
              <label for="">Phone</label>
              <span>Phone</span>
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" required></textarea>
              <label for="">Message</label>
              <span>Message</span>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button className="button form__button">
              Send <i class="ri-send-plane-line"></i>
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
