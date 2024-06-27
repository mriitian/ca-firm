import React, {useState ,useRef}  from 'react';
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import AppointmentForm from '../components/appointment/AppointmentForm'
import '../../public/styles/appointment.css'

export default function Appointment({SetIsLoggedIn, IsLoggedIn, user, SetUser}) {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header onContactButtonClick={scrollToContactForm} SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} SetUser={SetUser} user={user}/>
      <AppointmentForm  user={user} />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
