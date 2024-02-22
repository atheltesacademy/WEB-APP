import React from 'react';
import ImageLogo from '../../assets/logo-navbar.png';
import VectorLogo from '../../assets/Vector (2).svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faUser
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import './NavigationBar.css'


function NavigationBar() {
  return (
    <div className="navbar">
       <img src={ImageLogo} alt="img1" width="200px" style={{marginLeft:'3%'}} />
       <span className="navbarContant">
        <Link to="/Landing-Page"><i className="fa fa-fw fa-home"></i> Home</Link>
        <Link to="/Home-jsx"> Category</Link>
        <Link to="/With-Rating"> Blog</Link>
        <Link to="/Video-chat"> Wallet</Link>
        <span className='SearchChhotu'>
                 <input type="text" id="input" placeholder=" Name Sports Category..." className='placeholderSpan'/>
                {/* <img src={VectorLogo} alt="Boom" className='search-icon' /> */}
                </span>
                 </span>
        <span style={{float:'right',marginTop:'1%',marginLeft:'8%'}}>
        <Link to="/SignUp-from">Register</Link>
        <Link to="/SignIn-form"><FontAwesomeIcon icon={faUser}/>Sign in</Link></span>
    </div>
  );
}

export default NavigationBar;