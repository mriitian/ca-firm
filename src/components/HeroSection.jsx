import React from 'react';
import { Link } from 'react-router-dom';
import firmData from './data';

function HeroSection({onContactButtonClick}) {

  const onHandleClickContact = () => {
    onContactButtonClick();
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{firmData.welcomeMessage.title}</h1>
        <button onClick={onHandleClickContact} >Know More</button>
      </div>
    </section>
  );
}

export default HeroSection;
