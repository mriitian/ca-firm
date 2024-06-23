// src/Tooltip.js
import React, { useState } from 'react';
import "../../../public/styles/tooltip.css";
import "../../../public/styles/modal.css";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

let showSignUpFunc = () => {};
let showLoginFunc = () => {};

const AuthOverlay = ({ children, SetIsLoggedIn, IsLoggedIn, SetUser }) => {
  const [visible, setVisible] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);
  const handleClose = () => {
    setShowSignUp(false);
    setShowLogin(false);
  };

  const handleShowSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  showSignUpFunc = handleShowSignUp;
  showLoginFunc = handleShowLogin;

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div className="tooltip" onMouseEnter={showTooltip}>
          <div className="sign-up">
            <button onClick={handleShowSignUp}>SignUp</button>
          </div>
          <div className="sign-up">
            <button onClick={handleShowLogin}>Login</button>
          </div>
        </div>
      )}
      {showSignUp && (
        <div className="modal">
          <SignupForm onHandleClose={handleClose} IsLoggedIn={IsLoggedIn} SetIsLoggedIn={SetIsLoggedIn} SetUser={SetUser}/>
        </div>
      )}
      {showLogin && (
        <div className="modal">
          <LoginForm onHandleClose={handleClose} IsLoggedIn={IsLoggedIn} SetIsLoggedIn={SetIsLoggedIn} SetUser={SetUser}/>
        </div>
      )}
    </div>
  );
};

export { AuthOverlay, showSignUpFunc, showLoginFunc };
