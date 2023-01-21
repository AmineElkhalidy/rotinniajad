import React from "react";

// head
import Head from "next/head";
import Link from "next/link";

// motion
import { motion } from "framer-motion";

// Icons
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Rotin Niajad</title>
      </Head>

      <section className="max-w-6xl min-h-screen px-6 mx-auto" id="contact">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="pt-24"
        >
          {/* Container */}
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
            {/* Text container */}
            <div>
              <h2 className="mb-8 text-4xl font-bold md:text-5xl text-black-900 ">
                Se mettre en contact
              </h2>
              <p className="max-w-lg text-lg leading-7 text-grey-400">
                Avez-vous un projet en tête? Vous cherchez à vous associer ou à
                travailler ensemble ? Contactez-nous via le formulaire et je
                vous répondrai dans les prochaines 24 heures.
              </p>

              {/* Contact resources container */}
              <div className="mt-[60px] flex flex-col gap-6">
                <a
                  href="mailto:omarhaqouq@gmail.com"
                  className="inline-flex items-center gap-4 text-[20px] font-bold"
                >
                  <EnvelopeIcon className="w-7 h-7" /> omarhaqouq@gmail.com
                </a>
                <a
                  href="tel:+212707090524"
                  className="inline-flex items-center gap-4 text-[20px] font-bold"
                >
                  <PhoneIcon className="w-7 h-7" />
                  +212707090524
                </a>

                <a
                  href="https://www.google.com/maps/place/Rotin+Niajad/@32.6792076,-8.8043281,8z/data=!4m19!1m13!4m12!1m4!2m2!1d-8.0370256!2d31.6411532!4e1!1m6!1m2!1s0xda7a70a675dd0a5:0x81ebaeb50fc5eda5!2sRotin+niajad!2m2!1d-7.3321858!2d33.7278948!3m4!1s0xda7a70a675dd0a5:0x81ebaeb50fc5eda5!8m2!3d33.7278948!4d-7.3321858"
                  className="inline-flex items-center gap-4 text-[20px] font-bold"
                >
                  <MapPinIcon className="w-7 h-7" />
                  Mimosa, Mohammédia
                </a>
              </div>

              <div className="flex items-center gap-6 mt-[40px]">
                <Link
                  rel="noreferrer"
                  href="https://www.facebook.com/RotinNiajad/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                    className="w-9 h-9"
                  >
                    {" "}
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/rotin_niajad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                    className="w-9 h-9"
                  >
                    {" "}
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                  </svg>
                </Link>

                <Link
                  href="https://wa.me/212707090524"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="60px"
                    height="60px"
                    className="w-[2.4rem] h-[2.4rem]"
                  >
                    {" "}
                    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Form Container */}
            <div className="mb-24">
              <form onSubmit={""} className="max-w-xl" action="#">
                {/* First and Last name box */}
                <div className="flex flex-col mb-6 sm:gap-6 sm:flex-row sm:mb-0">
                  {/* First name box */}
                  <div className="mb-6 sm:w-[50%]">
                    <label
                      className="block mb-3 font-bold text-black-900"
                      htmlFor="firstName"
                    >
                      Nom
                    </label>
                    <input
                      className="w-full py-3 pl-6 bg-[#f2f6f7] border-none outline-none"
                      type="text"
                      name="first-name"
                      id="firstName"
                      placeholder="Nom"
                      required
                    />
                  </div>

                  {/* Last name box */}
                  <div className="sm:w-[50%]">
                    <label
                      className="block mb-3 font-bold text-black-900"
                      htmlFor="lastName"
                    >
                      Prénom
                    </label>
                    <input
                      className="w-full py-3 pl-6 bg-[#f2f6f7] border-none outline-none"
                      type="text"
                      name="last-name"
                      id="lastName"
                      placeholder="Prénom"
                      required
                    />
                  </div>
                </div>

                {/* Email box */}
                <div className="mb-6">
                  <div className="">
                    <label
                      className="block mb-3 font-bold text-black-900"
                      htmlFor="email"
                    >
                      Votre E-mail
                    </label>

                    <input
                      className="w-full py-3 pl-6 bg-[#f2f6f7] border-none outline-none"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Entrer votre e-mail"
                      required
                    />
                  </div>
                </div>

                {/* Email box */}
                <div className="mb-6">
                  <div className="">
                    <label
                      className="block mb-3 font-bold text-black-900"
                      htmlFor="telephone"
                    >
                      Votre Numéro téléphone
                    </label>

                    <input
                      className="w-full py-3 pl-6 bg-[#f2f6f7] border-none outline-none"
                      type="text"
                      name="telephone"
                      id="telephone"
                      placeholder="Entrer votre numéro de téléphone"
                      required
                    />
                  </div>
                </div>

                {/* Message box */}
                <div className="mb-6">
                  <div className="">
                    <label
                      className="block mb-3 font-bold text-black-900"
                      htmlFor="message"
                    >
                      Votre message ?
                    </label>
                    <textarea
                      className="w-full pt-4 pl-6 outline-none border-none pb-24 bg-[#f2f6f7]"
                      name="message"
                      id="message"
                      maxLength="5000"
                      placeholder="Expliqué ici!"
                      autoCorrect="false"
                    ></textarea>
                  </div>
                </div>

                {/* Button box */}
                <div className="relative">
                  <button
                    className="inline-block px-[48.5px] py-[1.26rem] bg-black-900 text-white cursor-pointer text-lg duration-300 font-nav font-semibold z-10 hover:translate-x-2 hover:translate-y-2"
                    href="#contact"
                    type="submit"
                    disabled={""}
                  >
                    Envoyer
                  </button>
                  <span className="gradient-box absolute -z-10 top-2 left-2 px-[5.25rem] py-[2.15rem] bg-red-500" />
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
