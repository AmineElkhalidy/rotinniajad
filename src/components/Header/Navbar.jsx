import React, { useState } from "react";
import "./Navbar.scss";

// Routing
import { Link, NavLink } from "react-router-dom";

// Motion
import { motion } from "framer-motion";

// Icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // Menu state
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav container">
      <Link to="/" className="nav__logo">
        Rotin Niajad
      </Link>

      <div className="nav__toggle" onClick={() => setOpen(true)}>
        <AiOutlineMenu />
      </div>

      <div className="nav__menu-desktop">
        <ul className="nav__list-desktop">
          <li className="nav__item-desktop">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "active" : "nav__link-desktop"
              }
              onClick={() => setOpen(false)}
            >
              Produits
            </NavLink>
          </li>

          <li className="nav__item-desktop">
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? "active" : "nav__link-desktop"
              }
              onClick={() => setOpen(false)}
            >
              À propos
            </NavLink>
          </li>

          <li className="nav__item-desktop">
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "active" : "nav__link-desktop"
              }
              onClick={() => setOpen(false)}
            >
              Contactez-nous
            </NavLink>
          </li>
        </ul>
      </div>

      {open && (
        <motion.div
          whileInView={{ x: [5, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="nav__menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/products"
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                Produits
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/aboutus"
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                À propos de nous
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contactus"
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                Contactez-nous
              </Link>
            </li>
          </ul>

          <div className="nav__close" onClick={() => setOpen(false)}>
            <AiOutlineClose />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
