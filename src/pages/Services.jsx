import React, {useRef}  from 'react';
import Header from "../components/Header";
import ServiceHero from '../components/ServiceHero';
import WhatWeOffer from '../components/WhatWeOffer';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


export default function Services() {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
        <Header onContactButtonClick={scrollToContactForm} />
        <ServiceHero />
        <WhatWeOffer />
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
        <Footer />
    </div>
  )
}
