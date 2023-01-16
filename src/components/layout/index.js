import React from "react";

// Header
import Header from "./header";
// Footer
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full h-full overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
