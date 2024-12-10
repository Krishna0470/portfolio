import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfoliopage from "./Portfoliopage.jsx";

function Landing() {
  return (
    <Router basename="/portfolio"> 
      <Routes>
        <Route path="/" element={<Portfoliopage />} />
      </Routes>
    </Router>
  );
}

export default Landing;
