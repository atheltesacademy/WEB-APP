import React from 'react';
import './LandingPage.css';
import Image from './lockup-color-1@2x.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import './ChatCard.css'; 
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const LandingPage2 = () => {
  return (
    <div>
      <NavigationBar/>
      <div className="content">
        <div className="row">
          <div className="column-01">
            <h1 style={{fontSize:"80px"}}>Sports</h1>
            <h2>Tennis</h2>
            <p>
              Welcome to Athlet’s Academy - Your Gateway to Sporting Excellence!
              At Athlet’s Academy. We are dedicated to connecting aspiring with experienced,
              coaches and mentors through our cutting-edge chat platform. Whether you are passionate
              about football, tennis, cricket, athletics yoga or any other sport. we have got you covered!
            </p>
          </div>
          <div className="column-02">
            <img src="tennis-card1@2x.png" alt="img1" width="400px" />
          </div>
        </div>
        <div className="row1">
       <Link to="/Landing-Page">   <img src="football-card@2x.png" alt="img1" width="15%" /></Link>
          <img src="basketball-card1@2x.png" alt="img1" width="13%" />
          <img src="tennis-card1@2x.png" alt="img1" width="12%" />
          <img src="yoga-card1@2x.png" alt="img1" width="11%" />
          <a href="#">More</a><FontAwesomeIcon icon={faAngleRight} style={{height:"48px"}}/>
        </div>
      </div>
      </div>
  );
}

export default LandingPage2;
