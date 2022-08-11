import React, { useState } from "react";
import "./Navbar.scss";

// Routing
import { Link, NavLink } from "react-router-dom";

// Icons
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  // Menu state
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav container">
      <Link to="/" className="nav__logo">
        Rotin Niajad
      </Link>

      <div className="nav__toggle" onClick={() => setOpen(true)}>
        <AiOutlineMenuFold />
      </div>

      <div className="nav__menu-desktop">
        <ul className="nav__list-desktop">
          <li className="nav__item-desktop">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "nav__link-desktop"
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li className="nav__item-desktop">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "active" : "nav__link-desktop"
              }
              onClick={() => setOpen(false)}
            >
              Products
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
              About Us
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
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {open && (
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/products"
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                Products
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/aboutus"
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contactus"
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="nav__close" onClick={() => setOpen(false)}>
            <AiOutlineClose />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
