import React from "react";

// Next components
import Head from "next/head";
import Link from "next/link";

// motion
import { motion } from "framer-motion";

// icons
import {
  ShieldCheckIcon,
  ClockIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rotin Niajad - Meuble de maison</title>
        <meta name="description" content="" />
        <link href="" />
      </Head>

      {/* Hero */}
      <section className="relative min-h-screen">
        {/* Container */}
        <motion.div className="flex items-center justify-center h-screen px-6 sm:px-0">
          {/* Content container */}
          <div>
            <h1 className="mb-3 text-lg text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
              Chers visiteurs, vous êtes les bienvenus
              <br />
              Chez{" "}
              <span className="font-medium gradient-text">ROTIN NIAJAD</span>
            </h1>

            <p className="mb-10 text-center sm:text-[18px] md:text-xl lg:text-2xl">
              Le meilleur endroit pour acheter les meubles de maison.
            </p>

            <div className="text-center">
              <Link
                className="px-6 py-4 rounded-full text-white duration-300 gradient-box text-[18px] md:text-xl lg:text-2xl"
                href="/products"
              >
                découvrir nos produits
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className=" bg-black-900">
        {/* Container */}
        <motion.div>
          {/* Content container */}
          <div className="py-20">
            <h2 className="mb-8 text-lg font-semibold text-center text-white sm:mb-12 sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
              Nos Services
            </h2>

            {/* Features container */}
            <div className="grid gap-16 px-6 place-items-center lg:px-0 sm:grid-cols-2 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <ShieldCheckIcon className="w-10 h-10 text-white sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                </div>
                <div>
                  <h3 className="font-medium text-white sm:text-lg lg:text-xl">
                    Excellente qualité
                  </h3>
                  <p className="text-gray-300 lg:text-lg">
                    On a des produits de bon qualité
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <ClockIcon className="w-10 h-10 text-white sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                </div>
                <div>
                  <h3 className="font-medium text-white sm:text-lg lg:text-xl">
                    Respectez les délais
                  </h3>
                  <p className="text-gray-300 lg:text-lg">
                    Nous veillons à respecter les délais fixés
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <TruckIcon className="w-10 h-10 text-white sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                </div>
                <div>
                  <h3 className="font-medium text-white sm:text-lg lg:text-xl">
                    Livraison
                  </h3>
                  <p className="text-gray-300 lg:text-lg">
                    Nous pouvons livrer partout au Maroc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
