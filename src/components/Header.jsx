import React, { useState, useEffect} from "react";
import TopHead from "./TopHead";
import logo from "../assets/ca-logo.png";
import { Link } from "react-router-dom";
import {AuthOverlay, showSignUpFunc, showLoginFunc } from "./auth/AuthOverlay";
import Profile from "./auth/Profile";
import '../../public/styles/modal.css'


function Header({ onContactButtonClick, SetIsLoggedIn, IsLoggedIn, SetUser, user }) {
  const [showNavbar, setShowNavbar] = useState(false)

  const [showProfile, setShowProfile] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const handleHideNavbar = () => {
    setShowNavbar(false)
  }

  const handleShowProfile = () => {
    setShowProfile(true);
  }

  const [delayedShow, setDelayedShow] = useState(false);

  useEffect(() => {
    let timer;
    if (showNavbar) {
      timer = setTimeout(() => {
        setDelayedShow(true);
      }, 320); // Adjust the delay time (in milliseconds) as needed
    } else {
      setDelayedShow(false);
    }

    // Cleanup the timer if the component unmounts or if showNavbar changes
    return () => clearTimeout(timer);
  }, [showNavbar]);

  const handleClickContact = () => {
    onContactButtonClick();
    handleHideNavbar();
  }

  const handleCloseProfile = () => {
    setShowProfile(false);
  }

  return (
    <>
      <div className="top-head">
        <TopHead />
      </div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="CA Firm Logo" width={100} />
        </div>
        <div className={`nav-block ${showNavbar && 'active'}`}>
          <div className="exit nav-option" onClick={handleHideNavbar}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <div className="nav-option">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-option">
            <Link to="/about">About Us</Link>
          </div>
          <div className="nav-option">
            <Link to="/team">Our Team</Link>
          </div>
          <div className="nav-option">
            <Link to="/services">Services</Link>
          </div>
          <div className="nav-option">
            <Link to="/testimonials">Testimonials</Link>
          </div>
          <div className="nav-option">
            <Link to="/clients">Clients</Link>
          </div>
          <div className={`contact nav-option ${delayedShow && 'show'}`} onClick={handleClickContact}>
            <button>Contact Us</button>
          </div>
          {!IsLoggedIn && (<div className={`contact signup nav-option ${delayedShow && 'show'}`} onClick={showSignUpFunc}>
            <button>SignUp</button>
          </div>)}
          {!IsLoggedIn && (<div className={`contact login nav-option ${delayedShow && 'show'}`} onClick={showLoginFunc}>
            <button>Login</button>
          </div>)}
        </div>
        <div className="header-buttons">
          {!IsLoggedIn ? (<AuthOverlay IsLoggedIn={IsLoggedIn} SetIsLoggedIn={SetIsLoggedIn} SetUser={SetUser}>
          <div className="contact">
            <div><i class="fa-solid fa-ellipsis-vertical" style={{fontSize:"x-large", cursor:"pointer"}}></i></div>
          </div>
          </AuthOverlay>) : 
          (<div className="contact" onClick={handleShowProfile} style={{cursor:'pointer', border:'1px solid black', borderRadius:'50%'}}>
             <i className="fa-solid fa-user" style={{padding:'10px 11px', fontSize:'x-large'}}></i>
          </div>)}
          <div className="contact" onClick={onContactButtonClick}>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="responsive-buttons">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <i class="fa-solid fa-bars" style={{fontSize:"30px"}}></i>
          </div>
          {IsLoggedIn && (
            <div className="user" onClick={handleShowProfile} style={{cursor:'pointer', border:'1px solid black', borderRadius:'50%'}}>
                <i className="fa-solid fa-user" style={{padding:'10px 11px', fontSize:'x-large'}}></i>
            </div>
          )}
        </div>
        

        {showProfile && (
        <div className="modal">
          <Profile IsLoggedIn={IsLoggedIn} SetIsLoggedIn={SetIsLoggedIn} SetUser={SetUser} user={user} handleClose={handleCloseProfile}/>
        </div>
      )}

      </header>
    </>
  );
}

export default Header;
