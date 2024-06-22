import React, {useRef} from "react";
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import AboutText from "../components/AboutText";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function About() {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Header onContactButtonClick={scrollToContactForm} />
      <AboutHero />
      <AboutText />
      <Gallery />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
