import React from 'react';
import ImageLogo from '../../assets/logo-navbar.png';
import SignLogo from '../../assets/Sign up.svg';
import LoginLogo from '../../assets/Costumer login.svg';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import './NavigationBar.css'


function NavigationBar() {
  return (
    <div className="navbar">
      <img src={ImageLogo} alt="img1" width="200px" style={{ marginLeft: '3%' }} />
      <span className="navbarContant">
        <Link to="/category/:sport"><i className="fa fa-fw fa-home"></i> Home</Link>
        <Link to="/home"> Category</Link>
        <Link to="/blog"> Blog</Link>
        <Link to="/wallet-recharge"> Wallet</Link>
        <div className="search-Nav">
          <input type="text" id="input" placeholder="Name Sports Category..." style={{ borderRadius: '26px', left: '423px', width: '184px', height: '26px', marginTop: '1%', backgroundColor: 'lightgray', borderColor: 'black', paddingLeft: '28px' }} />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />

        </div>
      </span>
      <Link to="/signup"><img src={LoginLogo} alt="" style={{ marginTop: '-4%', marginLeft: '50%' }} /></Link>
      <Link to="/signin"><img src={SignLogo} alt="" style={{ marginTop: '-6%', marginLeft: '10%' }} /></Link>
    </div>
  );
}

export default NavigationBar;