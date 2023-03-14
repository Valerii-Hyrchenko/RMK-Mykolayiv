import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./context/pagesContext";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Router>
        <App />
      </Router>
    </Context>
  </React.StrictMode>
);

reportWebVitals();
