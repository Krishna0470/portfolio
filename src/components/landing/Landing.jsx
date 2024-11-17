import React, { useState } from "react";
import Portfoliopage from "./Portfoliopage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function Landing() {
  

    return (
        <Router basename="/vite-project">
            <>
                <Routes>
                <Route path="/" exact element={<Portfoliopage/>} />
                </Routes>
            </>
        </Router>
    )
}

export default Landing;