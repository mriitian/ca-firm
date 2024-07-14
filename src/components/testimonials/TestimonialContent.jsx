import React from 'react'
import testimonials from './TestimonialData'
import '../../../public/styles/testimonials.css'
import firmData from '../data'

export default function TestimonialContent() {
  return (
    <div className='testimonial-box'>

        {firmData.clientTestimonials.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
                <div className="image">
                    <i class="fa-solid fa-user"></i>
                </div>
                    <div className="stars">
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                <div className="testimonial-content">
                    <h4>{testimonial.clientCompany}</h4>
                    <h5>{testimonial.clientName} - {testimonial.clientPosition}</h5>
                    <p>"{testimonial.quote}"</p>
                </div>
            </div>
        ))}
        
    </div>
  )
}
