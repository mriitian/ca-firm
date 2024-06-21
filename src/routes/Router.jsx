import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import OurTeam from "../pages/OurTeam";
import Testimonials from "../pages/Testimonials";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<OurTeam />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  );
}

export default Router;