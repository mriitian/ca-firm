// src/LoginForm.js
import React, {useState} from 'react';
import axios from 'axios'

const LoginForm = ({onHandleClose, SetIsLoggedIn, IsLoggedIn, SetUser}) => {
  const [formData, setFormData] = useState({
    username: '',
    pass1: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/signin/', formData, {
        headers: {
            'Content-Type': 'application/json',
        },     
    });
      console.log(response.data);
      SetUser(response.data.user);
      SetIsLoggedIn(true);
      console.log("logged in")
      onHandleClose();
      // Handle success (e.g., store user data in context, redirect)
    } catch (error) {
      console.error('Error signing in:', error.response.data);
      // Handle error (e.g., show error message)
    }
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <h4>Login Form</h4>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="text"
            name="username"
            value={formData.username}
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
        <div className="buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button onClick={onHandleClose} className='close-button'>Close</button>
        </div>
        
      </form>
  );
};

export default LoginForm;
