import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignupForm = ({ onHandleClose, SetIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    fname: '',
    lname: '',
    email: '',
    pass1: '',
    pass2: '',
  });

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await axios.get('http://127.0.0.1:8000/get_csrf_token/');
      setCsrfToken(response.data.csrfToken);
    };
    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/signup/', formData, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
      });
      console.log(response.data);
      onHandleClose();
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <button type="button" onClick={onHandleClose} className="close-button">Close</button>
      </div>
    </form>
  );
};

export default SignupForm;
