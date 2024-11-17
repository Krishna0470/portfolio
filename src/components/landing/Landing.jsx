import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfoliopage from "./Portfoliopage";

function Landing() {
  return (
    <Router basename="/vite-project"> {/* Ensure this matches the base of the deployed app */}
      <Routes>
        <Route path="/" element={<Portfoliopage />} />
      </Routes>
    </Router>
  );
}

export default Landing;
