import React from "react";

// Header
import Header from "./header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full h-full overflow-hidden">{children}</main>
    </>
  );
};

export default Layout;
