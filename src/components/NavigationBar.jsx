import React from 'react';
import MainLogo from './group-217@2x.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faUser
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className="navbar">
        <img className="logotoo" src={MainLogo} alt="logo" />
        <Link to="/Chat-Card"><i className="fa fa-fw fa-home"></i> Home</Link>
        <Link to="/Home-jsx"> Category</Link>
        <Link to="/CoachCard-WithRating"> Blog</Link>
        <Link to="/Landing-Page"> Wallet</Link>
        <Link to="#">
          <input type="text" id="input" placeholder=" Name Sports Category..." style={{ borderRadius: '25px',width:'90%' }} />
        </Link>
        <span style={{float:'right',margin:'1% 0% 0% 15%'}}>
        <Link to="/SignUp-from">Costumer Login</Link>
        <Link to="/SignIn-form"><FontAwesomeIcon icon={faUser}/>Sign-up</Link></span>
    </div>
  );
}

export default NavigationBar;