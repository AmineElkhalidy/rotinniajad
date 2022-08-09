import React from "react";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import { Home, Products, Contact, About } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
