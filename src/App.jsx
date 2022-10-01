import React, { useEffect } from "react";

// Analytics
import ReactGA from "react-ga";

// Routing
import { Routes, Route } from "react-router-dom";

// Tracking ID
const TRACKING_ID = "UA-188085571-1";
ReactGA.initialize(TRACKING_ID);

// Pages
import { Home, Products, Contact, About } from "./pages";

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
