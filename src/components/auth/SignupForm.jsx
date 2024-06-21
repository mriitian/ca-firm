// src/SignupForm.js
import React from 'react';

const SignupForm = ({ onHandleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };
  const handleChange = () => {

  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <h4>Signup Form</h4>
        <div className="form-group">
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company*</label>
          <input
            type="text"
            name="company"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number*</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button onClick={onHandleClose} className='close-button'>Close</button>
        </div>
        
      </form>
  );
};

export default SignupForm;
