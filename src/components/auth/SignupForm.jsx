// src/SignupForm.js
import React,{useState} from 'react';
import axios from 'axios';

const SignupForm = ({ onHandleClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    fname: '',
    lname: '',
    email: '',
    pass1: '',
    pass2: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/signup/', formData, {
            headers: {
                'Content-Type': 'application/json',
            },     
      });
      console.log(response.data);
      onHandleClose();  
      // Handle success (e.g., show success message, redirect)
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle error (e.g., show error message)
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <h4>Signup Form</h4>
        <div className="form-group">
          <label>Username*</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>First name*</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name*</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            name="pass1"
            value={formData.pass1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password*</label>
          <input
            type="password"
            name="pass2"
            value={formData.pass2}
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
