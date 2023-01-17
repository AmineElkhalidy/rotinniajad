import React from "react";

// head
import Head from "next/head";

// motion
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Rotin Niajad</title>
      </Head>

      <section className="w-full min-h-screen">
        <motion.div className="py-20">
          <h2 className="mt-4 mb-8 text-2xl font-semibold text-center sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
            À propos de nous
          </h2>
        </motion.div>
      </section>
    </>
  );
};

export default About;
