import React from "react";

// head
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// motion
import { motion } from "framer-motion";

// icons
import { PhoneIcon } from "@heroicons/react/24/outline";
import { BsWhatsapp } from "react-icons/bs";

// Data
import images from "@/data/data";

const Products = () => {
  return (
    <>
      <Head>
        <title>Our Products - Rotin Niajad</title>
      </Head>

      <section className="w-full min-h-screen">
        {/* Container */}
        <motion.div whileInView={{ opacity: [0, 1] }} className="py-20">
          <h2 className="mt-4 mb-8 text-2xl font-semibold text-center sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
            Découvrir nos <span className="gradient-text">produits</span>
          </h2>

          <div className="flex items-center justify-center h-full">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
              {images.map((image, index) => (
                <motion.div
                  whileInView={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
                  key={index}
                >
                  <div className="w-[275px] h-[300px]">
                    <Image
                      className="object-cover w-full h-full"
                      src={image}
                      alt="Product preview"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex justify-between p-6 bg-black-900">
                    <Link href="tel:+212530098636">
                      <PhoneIcon className="text-white duration-300 cursor-pointer w-7 h-7 hover:text-purple-500" />
                    </Link>

                    <Link href="https://wa.me/212707090524">
                      <BsWhatsapp className="text-white duration-300 cursor-pointer w-7 h-7 hover:text-purple-500" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Products;
