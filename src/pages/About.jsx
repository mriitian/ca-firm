import React from "react";
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import AboutText from "../components/AboutText";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <AboutText />
      <Gallery />
      <Footer />
    </div>
  );
}
