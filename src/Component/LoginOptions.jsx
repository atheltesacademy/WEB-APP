import React, { useState } from "react";
import './LoginOptions.css'
function LoginOptions() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <button onClick={handleRegisterClick} className="hidden" id="register">
        Sign Up
      </button>
      <button onClick={handleLoginClick} className="hidden" id="login">
        Login
      </button>
    </div>
  );
}

export default LoginOptions;
