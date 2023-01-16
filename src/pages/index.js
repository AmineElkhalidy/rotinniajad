import React from "react";

// Next components
import Head from "next/head";
import Link from "next/link";

// motion
import motion from "framer-motion";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rotin Niajad - Meuble de maison</title>
        <meta name="description" content="" />
        <link href="" />
      </Head>

      <section className="relative min-h-screen">
        {/* Container */}
        <div className="flex items-center justify-center h-screen px-6">
          {/* Content container */}
          <div>
            <h1 className="mb-3 text-xl text-center">
              Chers visiteurs, vous êtes les bienvenus
              <br />
              Chez{" "}
              <span className="font-medium gradient-text">ROTIN NIAJAD</span>
            </h1>

            <p className="text-[18px] text-center mb-6">
              Le meilleur endroit pour acheter les meubles de maison.
            </p>

            <div className="text-center">
              <Link
                className="px-6 py-4 text-white gradient-box text-[18px]"
                href="/products"
              >
                découvrir nos produits
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
