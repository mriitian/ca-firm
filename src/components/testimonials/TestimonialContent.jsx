import React from 'react'
import testimonials from './TestimonialData'
import '../../../public/styles/testimonials.css'

export default function TestimonialContent() {
  return (
    <div className='testimonial-box'>

        {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
                <div className="image">
                    <i class="fa-solid fa-user"></i>
                </div>
                    <div className="stars">
                        <span>{testimonial.stars}</span>
                    </div>
                <div className="testimonial-content">
                    <h4>{testimonial.company}</h4>
                    <h5>{testimonial.name}</h5>
                    <p>"{testimonial.text}"</p>
                </div>
            </div>
        ))}
        
    </div>
  )
}
