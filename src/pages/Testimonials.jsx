import React, {useRef}  from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TestimonialHero from '../components/testimonials/TestimonialHero'
import TestimonialContent from '../components/testimonials/TestimonialContent'
import ContactForm from '../components/ContactForm'


export default function Testimonials({SetIsLoggedIn, IsLoggedIn, user, SetUser}) {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
        <Header onContactButtonClick={scrollToContactForm} SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} SetUser={SetUser} user={user}/>
        <TestimonialHero />
        <TestimonialContent />
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
        <Footer/>
    </div>
  )
}
