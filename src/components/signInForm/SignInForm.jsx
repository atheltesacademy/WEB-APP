import React, { useState } from "react";
import "./SignInForm.css";
import blueLogo from "../../assets/images/ata-logo-color.png";
import Icon from "../../assets/svgs/other-login-options.svg";

import { Link } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState(false);

  function handleEmailChange(e) {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  function signinHandle(e) {
    const email = document.getElementById("email").value;
    if (email.length < 8 || password.length < 8) {
      alert("Type correct values");
    } else {
      alert("All good :)");
    }
    e.preventDefault();
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }

  return (
    <div className="main-container">
      <div className="card-containerIn">
        <img
          src={blueLogo}
          alt="Logo"
          width="60% "
          style={{ margin: "10% 5% 5% 20%" }}
        />

        <div className="container-save">
          <p className="welcomebackIn">WELCOME BACK</p>
          <p className="descriptionIn">WELCOME TO ATA</p>
        </div>
      </div>

      <div className="savepageIn">
        <form
          action="/"
          style={{ marginLeft: "10%", marginTop: "10%" }}
          onSubmit={signinHandle}
        >
          <h1 className="sign-in-title" style={{ color: "black" }}>
            SIGN IN
          </h1>
          <br />
          <br />
          <p>
            Not a member?{" "}
            <Link to="/signup" className="register-link">
              Register
            </Link>
          </p>

          <div className="row-signin">
            <div className="col-75">
              <input
                type="text"
                id="email"
                name="email"
                className="SigninInput"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <span style={{ color: "red" }}>Invalid email</span>
              )}
            </div>
          </div>
          <div className="row-signin">
            <div className="col-75">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="SigninInput"
                onChange={passwordHandler}
              />
              {passErr ? (
                <span style={{ color: "red" }}>Password Not Valid</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <label className="SigninLabel">
            <input type="checkbox" defaultUnChecked name="remember" /> Remember
            me
          </label>
          <div className="row-signin">
            <button className="signInOnly">Sign in</button>
            <div id="forgetPasswordLink">
              <Link
                to="/logout"
                id="forgetPassword"
                className="forget-password-link"
              >
                Forget Password?
              </Link>
            </div>
            <div id="threeIcon">
              <img
                src={Icon}
                alt="hello"
                style={{ marginTop: "20%", marginLeft: "10px" }}
              />
            </div>

            <p
              style={{
                marginTop: "10px",
                marginLeft: "40px",
                fontSize: "small",
              }}
            >
              Copyright@2024 ATA All. right reserved
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
