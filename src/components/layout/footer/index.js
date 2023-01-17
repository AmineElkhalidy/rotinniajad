import React from "react";

// motion
import { motion } from "framer-motion";

// Link
import Link from "next/link";

// Icons
import { HomeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  // Getting current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-full text-white bg-black-900">
      {/* Container */}
      <motion.div className="max-w-6xl py-20 mx-auto">
        {/* Content container */}
        <div className="flex flex-col px-6 md:flex-row sm:justify-between sm:items-center xl:px-0">
          <div>
            <Link className="inline-flex items-center gap-2 text-md" href="/">
              <HomeIcon className="w-6 h-6" />{" "}
              <span className="mt-1 font-medium sm:text-lg">ROTIN NIAJAD</span>
            </Link>
            <p className="text-gray-300 sm:text-lg">Meuble de maison</p>
          </div>

          <ul className="flex flex-col gap-2 mt-6 sm:flex-row md:mt-0 sm:gap-4 md:gap-6 lg:gap-12">
            <li>
              <Link
                className="duration-300 sm:text-lg hover:text-gray-300"
                href="/"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="duration-300 sm:text-lg hover:text-gray-300"
                href="/products"
              >
                Produits
              </Link>
            </li>
            <li>
              <Link
                className="duration-300 sm:text-lg hover:text-gray-300"
                href="/about"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                className="duration-300 sm:text-lg hover:text-gray-300"
                href="/contact"
              >
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>

        <p className="px-6 mt-20 text-center md:mt-24">
          Designed & built by{" "}
          <Link
            className="font-medium gradient-text"
            target="_blank"
            href="https://amineelkhalidy.com"
          >
            Amine Elkhalidy
          </Link>{" "}
          <br />
          &copy;{currentYear} - All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
