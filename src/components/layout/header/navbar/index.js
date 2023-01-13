import React, { useState } from "react";

// Link
import Link from "next/link";
import { useRouter } from "next/router";

// menu icon
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const router = useRouter();

  return (
    <nav className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto duration-300 md:h-20 xl:px-0">
      <div>
        <a className="text-xl font-medium tracking-widest cursor-pointer sm:hidden md:text-xl">
          RN
        </a>

        <a className="hidden text-xl font-medium uppercase cursor-pointer sm:inline md:text-xl">
          Rotin Niajad
        </a>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div>
          {activeMenu ? (
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            />
          ) : (
            <Bars3Icon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setActiveMenu(true)}
            />
          )}

          <div
            className={`fixed right-0 z-40 w-full h-full bg-white duration-[0.4s] ${
              activeMenu ? "top-14" : "-top-[100%]"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full">
              <ul className="flex flex-col gap-4 -mt-12 text-center">
                <li className="text-lg font-medium hover:text-gray-500">
                  <Link onClick={() => setActiveMenu(false)} href="/">
                    Home
                  </Link>
                </li>

                <li className="text-lg font-medium hover:text-gray-500">
                  <Link onClick={() => setActiveMenu(false)} href="/products">
                    Products
                  </Link>
                </li>

                <li className="text-lg font-medium hover:text-gray-500">
                  <Link onClick={() => setActiveMenu(false)} href="/about">
                    About Us
                  </Link>
                </li>

                <li className="text-lg font-medium hover:text-gray-500">
                  <Link onClick={() => setActiveMenu(false)} href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:block">
        <ul className="flex gap-10">
          <li>
            <Link
              className={`font-medium text-[1.03rem] text-grey-800 ${
                router.pathname === "/" ? "gradient-text" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={`font-medium text-[1.03rem] text-grey-800 ${
                router.pathname === "/products" ? "gradient-text" : ""
              }`}
              href="/products"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              className={`font-medium text-[1.03rem] text-grey-800 ${
                router.pathname === "/about" ? "gradient-text" : ""
              }`}
              href="/about"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              className={`font-medium text-[1.03rem] text-grey-800 ${
                router.pathname === "/contact" ? "gradient-text" : ""
              }`}
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
