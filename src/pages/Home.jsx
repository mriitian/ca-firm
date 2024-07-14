import React, { useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CompanyProfile from '../components/CompanyProfile';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Home({SetIsLoggedIn, IsLoggedIn, user, SetUser}) {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header onContactButtonClick={scrollToContactForm} SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} SetUser={SetUser} user={user}/>
      <HeroSection onContactButtonClick={scrollToContactForm} />
      <CompanyProfile />
      <ServicesSection />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
