import React, { useState, useEffect } from "react";

// navbar
import Navbar from "./navbar";

const Header = () => {
  // Changing the header shadow
  const [headerShadow, setHeaderShadow] = useState(false);

  // Function that keeps tracking the scroll event
  const changeHeaderShadow = () => {
    if (window.scrollY >= 80) {
      setHeaderShadow(true);
    } else {
      setHeaderShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderShadow);

    return () => window.removeEventListener("scroll", changeHeaderShadow);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white ${
        headerShadow ? "shadow-xl" : ""
      }`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
