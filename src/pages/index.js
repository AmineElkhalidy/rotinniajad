import React, { useState, useEffect } from "react";

// Next components
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// motion
import { motion } from "framer-motion";

// icons
import {
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

// Data
import { featuredImages } from "@/data/data";

const Home = () => {
  // Arrow up state
  const [showArrow, setShowArrow] = useState(false);

  return (
    <>
      <Head>
        <title>Rotin Niajad - Meuble de maison</title>
        <meta name="description" content="" />
        <link href="" />
      </Head>

      <>
        {/* Hero */}
        <section className="relative min-h-screen">
          {/* Container */}
          <motion.div className="flex items-center justify-center h-screen px-6 sm:px-0">
            {/* Content container */}
            <div>
              <h1 className="mb-3 text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Chers visiteurs, vous êtes les bienvenus
                <br />
                Chez{" "}
                <span className="font-medium gradient-text">ROTIN NIAJAD</span>
              </h1>

              <p className="mb-10 text-lg text-center sm:text-xl md:text-2xl lg:text-3xl">
                Le meilleur endroit pour acheter les meubles de maison.
              </p>

              <div className="text-center">
                <Link
                  className="px-8 py-4 text-lg text-white duration-300 rounded-full shadow-lg gradient-box md:text-xl lg:text-2xl shadow-purple-600/50"
                  href="/products"
                >
                  découvrir nos produits
                </Link>
              </div>
            </div>

            {/* Arrow Up Down */}
            <div className="absolute bottom-16 sm:bottom-1">
              <a href="#services">
                <ArrowDownIcon className="w-8 h-8 text-purple-700 cursor-pointer animate-bounce" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <section className=" bg-black-900" id="services">
          {/* Container */}
          <motion.div
            whileInView={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            {/* Content container */}
            <div className="py-20">
              <h2 className="mb-8 text-2xl font-semibold text-center text-white sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
                Nos Services
              </h2>

              {/* Features container */}
              <div className="grid gap-16 px-6 place-items-center lg:px-0 sm:grid-cols-2 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <ShieldCheckIcon className="text-white w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                      Excellente qualité
                    </h3>
                    <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
                      On a des produits de bon qualité
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <ClockIcon className="text-white w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                      Respectons les délais
                    </h3>
                    <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
                      On Respecte les délais
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <TruckIcon className="text-white w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-medium text-white sm:text-2xl lg:text-3xl">
                      Livraison
                    </h3>
                    <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
                      nous livraisons partout au Maroc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Products */}
        <section>
          {/* Container */}
          <motion.div>
            {/* Content container */}
            <div className="pt-20 pb-20">
              <h2 className="mb-8 text-2xl font-semibold text-center sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
                Nos Produits
              </h2>

              {/* Products container */}
              <div className="grid gap-6 mb-12 sm:gap-12 sm:mb-16 place-items-center sm:grid-cols-2 sm:px-12 md:grid-cols-3 lg:grid-cols-4">
                {featuredImages.map((image, index) => (
                  <div key={index} className="w-[300px] h-[325px]">
                    <Image
                      className="object-cover w-full h-full border-none"
                      src={image}
                      alt="featured product"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  className="group px-8 py-4 text-white duration-300 inline-flex items-center gap-1 gradient-box text-[18px] md:text-xl lg:text-2xl"
                  href="/products"
                >
                  Explorez plus{" "}
                  <ArrowRightIcon className="w-5 h-5 mt-[.15rem] group-hover:translate-x-2 duration-300 " />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Arrow up */}
        <a
          href="#"
          className={`fixed p-1.5 duration-300 opacity-50 -right-10 bottom-2 gradient-box hover:opacity-100 ${
            showArrow ? "right-2" : ""
          }`}
        >
          <ArrowUpIcon className="w-6 h-6 text-white" />
        </a>
      </>
    </>
  );
};

export default Home;
