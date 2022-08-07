import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Routing
import { BrowserRouter as Router } from "react-router-dom";

// Layout
import { Layout } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </React.StrictMode>
);
