import React from "react";
import "./LandingPage.css";
import LandingBG from "../../assets/images/ata-landing-bg.jpeg";
import Logo from "../../assets/images/ata-logo-white.png";
import NavigationBar from "../navigation/NavigationBar";

function LandingPage() {
  return (
    <div>
      <section className="landing-page-container">
        <img src={LandingBG} alt="boom!" width="100%" height="100%" />
        <div className="landing-page-content">
          <img className="logoImage" src={Logo} alt="logo" width="60%" />
          <div id="landing-intro">
            Welcome to Athelets Academy- Your Gateway to sporting excellence! At
            athelets academy we are dedicated to connecting aspiring athelets
            with experienced coaches and mentors through our cutting-edge chat
            platform. Whether you are passionate about football, tennis,
            cricket, atheletics, yoga, or any other sports, we have got you
            covered!
          </div>
        </div>
      </section>
      <NavigationBar />
    </div>
  );
}
export default LandingPage;
