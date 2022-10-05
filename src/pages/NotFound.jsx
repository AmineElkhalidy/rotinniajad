import React from "react";
import "./NotFound.scss";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="page-container container">
      <h3 className="page__title">
        The page that you are looking for doesn't exist
      </h3>
      <motion.div whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }}>
        <Link to="/" className="button home__button">
          Go back
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
