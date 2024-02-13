
// export default Mainpage;
import React from 'react';
import './Mainpage.css';
import Image from './bg - Copy.jpeg';
import Logo from './lockup-white-1@2x.png';
import MainLogo from './group-217@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faUser
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';


function Mainpage() {
  return (
    <div>
      <section id="main">
        <img src={Image} alt="background" width="100%" />
        <div className="inner">
          <img className="logoImage" src={Logo} alt="logo" width="40%" />
          <p  style={{ color: 'rgb(241, 237, 237)', textAlign: 'center', backgroundColor: 'rgb(232 237 237 / 28%)', 
            height: '170px', fontSize: '20px', marginLeft: '250px', marginRight: '100px', 
            fontFamily: 'cursive', borderRadius: '20px', fontWeight: 'bold', width: '700px',  backdropFilter: 'blur(50px)' }} >
            Welcome to Athelets Academy- Your Gateway to sporting excellence! At athelets academy we are dedicated to
             connecting aspiring athelets with experienced coaches and mentors through our cutting-edge chat platform.
              Whether you are passionate about football, tennis, cricket, atheletics, yoga, or any other sports, 
              we have got you covered!</p>
        </div>
      </section>
      <NavigationBar/>
    </div>
  );
}
export default Mainpage;
