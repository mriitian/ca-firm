import React, {useRef}  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamHero from '../components/teams/TeamHero';
import TeamMembers from '../components/teams/TeamMembers';
import TeamText from '../components/teams/TeamText';
import ContactForm from '../components/ContactForm';



export default function OurTeam({SetIsLoggedIn, IsLoggedIn, user, SetUser}) {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
        <Header onContactButtonClick={scrollToContactForm} SetIsLoggedIn={SetIsLoggedIn} IsLoggedIn={IsLoggedIn} SetUser={SetUser} user={user}/>
        <TeamHero />
        <TeamText />
        <TeamMembers />
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
        <Footer />
    </div>
  )
}
