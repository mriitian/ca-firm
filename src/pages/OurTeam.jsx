import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamHero from '../components/teams/TeamHero';
import TeamMembers from '../components/teams/TeamMembers';
import TeamText from '../components/teams/TeamText';



export default function OurTeam() {
  return (
    <div>
        <Header />
        <TeamHero />
        <TeamText />
        <TeamMembers />
        <Footer />
    </div>
  )
}
