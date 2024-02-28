import React from 'react';
import './Mainpage.css';
import Image from '../../assets/bg - Copy.jpeg';
import Logo from '../../assets/lockup-white-1@2x.png';
import NavigationBar from '../navigation/NavigationBar';


function Mainpage() {
  return (
    <div>
      <section id="main">
        <img src={Image} alt="boom!" width="100%" height="100%" />
               <div className="inner">
    <img className="logoImage" src={Logo} alt="logo" width="60%" />
         <div id="peragraf">
            Welcome to Athelets Academy- Your Gateway to sporting excellence! At athelets academy we are dedicated to
             connecting aspiring athelets with experienced coaches and mentors through our cutting-edge chat platform.
              Whether you are passionate about football, tennis, cricket, atheletics, yoga, or any other sports, 
              we have got you covered!</div>
        </div>
      </section>
      <NavigationBar/>
    </div>
  );
}
export default Mainpage;
