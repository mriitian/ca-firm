import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = ({ SetIsLoggedIn, user, SetUser, handleClose}) => {
    const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/signout/');
      console.log(response.data);
      // Handle success (e.g., clear user data, redirect)
      SetIsLoggedIn(false); // Update login status to false
      console.log("logged out");
        SetIsLoggedIn(false);
        handleClose()
        navigate('/');
    } catch (error) {
      console.error('Error signing out:', error.message);
      // Handle error (e.g., show error message)
    }
  };

  const handleClick = () => {
    console.log(user)
  }
  return (
    <div className='profile-box'>
      <h2>Profile</h2>
      <h5>Welcome, {user.username}</h5>
      <h5>Email: {user.email}</h5>
      <button onClick={handleSignout}>Logout</button>
    </div>
  );
};

export default Profile;
