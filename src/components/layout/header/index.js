import React from "react";

// navbar
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className={`fixed top-0 left-0 z-50 w-full bg-white`}>
      <Navbar />
    </header>
  );
};

export default Header;
