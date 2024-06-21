import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TestimonialHero from '../components/testimonials/TestimonialHero'
import TestimonialContent from '../components/testimonials/TestimonialContent'


export default function Testimonials() {
  return (
    <div>
        <Header/>
        <TestimonialHero />
        <TestimonialContent />
        <Footer/>
    </div>
  )
}
